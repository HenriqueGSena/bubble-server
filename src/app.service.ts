import { Injectable } from '@nestjs/common';
import { Accommodation } from './utils/accommodation';
import { PrismaServer } from './db/prisma.server';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaServer) { }

  public async findAccommodation(): Promise<Accommodation[]> {
    try {
      const db = await this.prismaService.findListAccommodation() as any[];

      const acomodacoes: Accommodation[] = db.map((item) => {
        let camaObj = {};

        try {
          camaObj = JSON.parse(item.cama.replace(/'/g, '"'));
        } catch (e) {
          console.warn(`Erro ao parsear cama da acomodação ${item.id_acc}`, e);
        }

        return {
          ...item,
          cama: camaObj,
        };
      });

      return acomodacoes;
    } catch (e) {
      console.error('Erro na busca pelas acomodações', e);
      throw e;
    }
  }
}
