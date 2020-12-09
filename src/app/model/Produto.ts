export class Produto {
  id?: number;
  descricao?: string;
  categoria?: string
  preco?: number;
  imgUrl?: string;

  constructor(produto: IProduto) {
    this.id = produto.id;
    this.descricao = produto.descricao;
    this.categoria = produto.categoria;
    this.preco = produto.preco;
    this.imgUrl = produto.imgUrl;
  }


  getPreco(): number {
    if (this.preco === undefined) {
      return NaN;
    }
    return this.preco;
  }

  getId(): number {
    if (this.id === undefined) {
      return NaN;
    }
    return this.id;
  }
}

export interface IProduto {
  descricao?: string,
  categoria?: string,
  preco?: number,
  id?: number,
  imgUrl?: string,

}
