import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto, IProduto } from 'src/app/model/Produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto = new Produto({});
  @Output('addCarrinho') addCarrinhoEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // this.produto = new Produto({
    //   id: 1,
    //   categoria: "Hardware",
    //   descricao: "Teclado Gamer",
    //   preco: 300.00,
    //   imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61aFqydIphL._AC_SY450_.jpg",
    // });
  }

  fnAddCarrinho() {
    this.addCarrinhoEvent.emit(this.produto);
  }

}
