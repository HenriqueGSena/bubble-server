import { Injectable } from '@nestjs/common';
import { Accommodation } from './utils/accommodation';
import { PrismaServer } from './db/prisma.server';

@Injectable()
export class AppService {

  constructor(private readonly prismaService: PrismaServer) {}
  
  public async findAccommodation(): Promise<Accommodation[]> {
    try {
      const db = await this.prismaService.findListAccommodation() as Accommodation[];
      return db;
    } catch (e) {
      console.error('Error na busca pelas acomodações', e);
      throw e;
    }
  }
}
