import { Component, OnInit } from '@angular/core';
import { Produto } from './model/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eComerce';
  listaProdutos: Produto[] = [];
  carrinhoDeCompras: Produto[] = [];

  ngOnInit(): void {
    this.listaProdutos.push(new Produto({
      id: 1,
      categoria: "Hardware",
      descricao: "Mouse Gamer",
      preco: 100.00,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61aFqydIphL._AC_SY450_.jpg",
    }));

    this.listaProdutos.push(new Produto({
      id: 2,
      categoria: "Hardware",
      descricao: "Teclado Sem Fio",
      preco: 300.00,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61aFqydIphL._AC_SY450_.jpg",
    }));

    this.listaProdutos.push(new Produto({
      id: 2,
      categoria: "Hardware",
      descricao: "Mouse Pad",
      preco: 50.00,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61aFqydIphL._AC_SY450_.jpg",
    }));

  }

  addCarrinho(event: any) {
    if (event instanceof Produto) {
      this.carrinhoDeCompras.push(event);
    }

  }
}
