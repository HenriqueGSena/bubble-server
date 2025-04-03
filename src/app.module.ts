import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaServer } from './db/prisma.server';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaServer],
})
export class AppModule {}
