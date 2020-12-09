import { Component, Input, OnInit } from '@angular/core';
import { BoletoBancario } from 'src/app/model/BoletoBancario';
import { CartaoDeCredito } from 'src/app/model/CartaoDeCredito';
import { MeioDePagamento, IMeioDePagamento } from 'src/app/model/MeioDePagamento';

@Component({
  selector: 'app-meio-de-pagamento',
  templateUrl: './meio-de-pagamento.component.html',
  styleUrls: ['./meio-de-pagamento.component.css']
})
export class MeioDePagamentoComponent implements OnInit {

  @Input('meioPagamento') meioDePagamento: MeioDePagamento = new MeioDePagamento({});
  cartao: CartaoDeCredito = new CartaoDeCredito({});
  boleto: BoletoBancario = new BoletoBancario({});

  isCartao = false;
  isBoleto = false;
  constructor() { }

  ngOnInit(): void {
    if (this.meioDePagamento instanceof CartaoDeCredito) {
      this.isCartao = true;
      this.cartao = this.meioDePagamento;
    }

    if (this.meioDePagamento instanceof BoletoBancario) {
      this.isBoleto = true;
      this.boleto = this.meioDePagamento;
    }
  }

}
