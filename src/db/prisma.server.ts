import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaServer extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }

    public async findListAccommodation() {
        const result = await this.$queryRaw`
        select
            a.id_acc,
	        a.nome_acomodacao,
	        a.cama,
	        a.qtde_quartos,
	        a.qtde_banheiros,
	        a.cidade,
	        a.endereco,
	        a.bairro
        from accommodation a where status = 'ENABLED' order by nome_acomodacao asc`;

        return result;
    }
}
