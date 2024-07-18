import { Injectable } from '@angular/core';
import { Imovel } from './imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  private imoveisDB: Imovel[] = [
    {
      "id": 1,
      "url_foto": "1.jpg",
      "nome": "Sobrado lindo",
      "cidade": "Saltinho",
      "estado": "Minas Gerais",
      "favorito": false,
      "tipo": "casa",
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [
        {
          "chave": "Quartos disponíveis",
          "valor": 6
        },
        {
          "chave": "Piscina",
          "valor": "Sim"
        }
      ],
      "aluguel":[{
        "chave": "Aluguel mensal:",
        "valor":4500.00
      },{
        "chave": "Aluguel anual:",
        "valor":5500.00
      },
      {
        "chave": "Aluguel por dois anos:",
        "valor":20000.00
      }
    ]
    },
    {
      "id": 2,
      "url_foto": "2.jpg",
      "nome": "Kitnet econômica",
      "cidade": "Charqueada",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "apt",
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [
        {
          "chave": "Banheiro",
          "valor": 1
        }
      ],
      "aluguel":[]
    },
    {
      "id": 3,
      "url_foto": "3.jpg",
      "nome": "Casarão na floresta",
      "cidade": "Americana",
      "estado": "São Paulo",
      "favorito": false,
      "valor":49.000,
      "tipo": "casa",
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [
        {
          "chave": "Quartos",
          "valor": 10
        },
        {
          "chave": "Quintal",
          "valor": "Muito grande"
        },
        {
          "chave": "Árvores",
          "valor": "Bastante"
        }
      ],
      "aluguel":[]
    },
    {
      "id": 4,
      "url_foto": "4.jpg",
      "nome": "Casa muito aconchegante",
      "cidade": "Nova Odessa",
      "estado": "São Paulo",
      "favorito": false,
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "tipo": "casa",
      "adicionais": [
        {
          "chave": "Local",
          "valor": "Condomínio Fechado"
        },
        {
          "chave": "Segurança",
          "valor": "Incluso no condomínio"
        },
        {
          "chave": "Diversão",
          "valor": "Quadra, campo, playground"
        }
      ],
      "aluguel":[]
    },
    {
      "id": 5,
      "url_foto": "5.jpg",
      "nome": "Casa 05",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "apt",
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [
        {
          "chave": "Local",
          "valor": "Condomínio Fechado"
        },
        {
          "chave": "Wifi",
          "valor": "sim"
        }
      ],
      "aluguel":[]
    },
    {
      "id": 6,
      "url_foto": "6.jpg",
      "nome": "Casa 06",
      "cidade": "Cabreúva",
      "estado": "São Paulo",
      "valor":49.000,
      "favorito": false,
      "tipo": "apt",
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [
        {
          "chave": "Container",
          "valor": "Casa feita com containers"
        },
        {
          "chave": "Energia",
          "valor": "está incluso"
        }
      ],
      "aluguel":[]
    },
    {
      "id": 7,
      "url_foto": "7.jpg",
      "nome": "Casa 07",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [
        {
          "chave": "Quartos",
          "valor": 10
        },
        {
          "chave": "Quintal",
          "valor": "Muito grande"
        },
        {
          "chave": "Árvores",
          "valor": "Bastante"
        }
      ],
      "aluguel":[]
    },
    {
      "id": 8,
      "url_foto": "8.jpg",
      "nome": "Casa 08",
      "cidade": "Piracicaba",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [],
      "aluguel":[]
    },
    {
      "id": 9,
      "url_foto": "9.jpg",
      "nome": "Casa 09",
      "cidade": "Sumaré",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "apt",
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [],
      "aluguel":[]
    },
    {
      "id": 10,
      "url_foto": "10.jpg",
      "nome": "Casa 10",
      "cidade": "Charqueada",
      "estado": "São Paulo",
      "favorito": false,
      "tipo": "casa",
      "valor":49.000,
      "lat": -22.8457824,
      "lng": -47.6760854,
      "adicionais": [],
      "aluguel":[]
    }
  ]

  buscarTodosImoveis(): Imovel[] {
    return this.imoveisDB
  }

  buscarImovelPeloId(id: number): Imovel | undefined {
    let imovel;

    for (let i = 0; i < this.imoveisDB.length; i++) {
      imovel = this.imoveisDB[i];

      if (imovel.id == id) {
        break
      }
    }
    return imovel
  }

}
