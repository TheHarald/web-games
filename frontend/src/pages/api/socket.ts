import { Server, Socket } from "socket.io";
import { NextApiRequest, NextApiResponse } from "next/types";
import redis from "redis";
import type { Server as HTTPServer } from "http";
import type { Socket as NetSocket } from "net";
import type { Server as IOServer } from "socket.io";

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

let connectedSocketIds: string[] = [];

const client = redis.createClient({
  // add your Redis configuration here
});

export default function SocketHandler(
  _: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server, {
    path: "/api/socket",
    addTrailingSlash: false,
  });

  io.sockets.on("connection", async (socket: Socket) => {
    connectedSocketIds.push(socket.id);
    console.log(`A user connected: ${socket.id}`, connectedSocketIds);
    await client.set(socket.id, "some");
    console.log(await client.get(socket.id));

    socket.on("disconnect", () => {
      connectedSocketIds = connectedSocketIds.filter((id) => id !== socket.id);
      console.log(`A user disconnected: ${socket.id}`, connectedSocketIds);
    });
  });

  res.socket.server.io = io;
  console.log("Setting up socket");
  res.end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};
