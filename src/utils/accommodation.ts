export interface Accommodation {
    id_acc: string,
    nome_acomodacao: string,
    cama: Cama,
    qtde_quartos: number,
    qtde_banheiros: string,
    cidade: string,
    endereco: string,
    bairro: string
}

interface Cama {
    DOUBLE?: number;
    QUEENSIZE?: number;
    INDIVIDUAL?: number;
    [tipoOutro: string]: number | undefined;
}
