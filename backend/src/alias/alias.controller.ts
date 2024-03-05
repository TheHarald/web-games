import { Controller, Get } from '@nestjs/common';
import { AliasService } from './alias.service';
import { Word } from '@prisma/client';

@Controller('alias')
export class AliasController {
  constructor(private readonly aliasService: AliasService) {}

  @Get('words')
  async getWordsForGame(): Promise<Word[]> {
    const words = await this.aliasService.getWords();
    return words;
  }

  @Get('initialize')
  async initializeDatabase(): Promise<string> {
    const filePath = 'data.txt';
    await this.aliasService.initializeDatabase(filePath);
    return 'Database initialized';
  }
}
