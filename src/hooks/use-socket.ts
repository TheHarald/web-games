import { useEffect } from "react";
import { socket } from "../socket";

export function useSocket() {
  const disconnectHandler = () => {
    socket.disconnect();
  };

  useEffect(() => {
    socket.connect();
    window.addEventListener("unload", disconnectHandler);

    return () => {
      socket.disconnect();
      window.removeEventListener("unload", disconnectHandler);
    };
  }, []);
}
