import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AliasModule } from './alias/alias.module';

@Module({
  imports: [AliasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
