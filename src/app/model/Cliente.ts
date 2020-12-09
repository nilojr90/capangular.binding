import { MeioDePagamento } from './MeioDePagamento';
import { Endereco } from './Endereco';

export class Cliente {
  nome: string = '';
  endereco: Endereco = {};
  meiosDePagamento: MeioDePagamento[] = [];

  // constructor(cliente: ICliente) {
  //   this.nome = cliente.nome;
  //   this.endereco = cliente.endereco;
  //   this.meiosDePagamento = cliente.meiosDePagamento;
  // }

  setNome(nome: string) {
    this.nome = nome;
  }

  setEndereco(endereco: Endereco) {
    this.endereco = endereco;
  }

  addMeioDePagamento(meioDePagamento: MeioDePagamento) {
    this.meiosDePagamento.push(meioDePagamento);
  }
}

export interface ICliente {
  nome?: string,
  endereco?: Endereco,
  meiosDePagamento?: MeioDePagamento[],
}
