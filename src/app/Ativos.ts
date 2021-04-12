export interface Ativos{
    id: number;
    stock : string;
    exchange:string;
    country:string;
    company:string;
    variation:number;
    price:number;
    favorito: boolean;
    chart:number[];
}
