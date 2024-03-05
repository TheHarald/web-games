import { Module } from '@nestjs/common';
import { AliasController } from './alias.controller';
import { AliasService } from './alias.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AliasController],
  providers: [AliasService, PrismaService],
})
export class AliasModule {}
