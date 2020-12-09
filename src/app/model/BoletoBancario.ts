import { MeioDePagamento } from './MeioDePagamento';

export class BoletoBancario extends MeioDePagamento {

  codigo_barras?: string;
  vencimento?: Date;
  valor?: number;

  constructor(boleto: IBoletoBancario) {
    super({
      emissor: boleto.emissor,
      moeda: boleto.moeda
    });

    this.codigo_barras = boleto.codigo_barras;
    this.vencimento = boleto.vencimento;
    this.valor = boleto.valor;
  }
}

export interface IBoletoBancario {
  emissor?: string,
  moeda?: string,
  valor?: number,
  codigo_barras?: string,
  vencimento?: Date,
}
