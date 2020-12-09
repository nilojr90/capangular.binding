export class MeioDePagamento {

  emissor?: string;
  moeda?: string;

  constructor(meioPagamento: IMeioDePagamento) {
    this.emissor = meioPagamento.emissor;
    this.moeda = meioPagamento.moeda;
  }

  toSting(): string {
    return `MeioDePagamento \r\n` +
      `Emissor: ${this.emissor} \r\n` +
      `Moeda: ${this.moeda}`;
  }

}

export interface IMeioDePagamento {
  emissor?: string,
  moeda?: string
}
