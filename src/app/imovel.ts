interface Propriedades {
    chave: String;
    valor: number|String;
}
interface DestalhesAluguel{
    chave:String
    valor:number;
}
export interface Imovel {
    id: number;
    url_foto: String;
    nome: String;
    cidade: String;
    estado: String;
    tipo: String;
    favorito: boolean;
    lat: number;
    lng: number;
    adicionais: Propriedades[];
    aluguel:DestalhesAluguel[
        
    ];
}