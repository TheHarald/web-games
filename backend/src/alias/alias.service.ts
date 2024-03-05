import { Injectable } from '@nestjs/common';
import { Word } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as fs from 'fs';

@Injectable()
export class AliasService {
  constructor(private prisma: PrismaService) {}

  async getWords(): Promise<Word[]> {
    const wordCount = await this.prisma.word.count();
    const limit = 1000;
    const skip = Math.max(0, Math.floor(Math.random() * wordCount) - limit);
    return this.prisma.word.findMany({
      take: limit,
      skip,
    });
  }

  async initializeDatabase(filePath: string): Promise<void> {
    const words = fs.readFileSync(filePath, 'utf-8').split('\r\n');

    for (const word of words) {
      await this.prisma.word.create({
        data: {
          word,
        },
      });
    }
  }
}
