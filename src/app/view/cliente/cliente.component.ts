import { Component, OnInit } from '@angular/core';
import { Cliente, ICliente } from '../../model/Cliente';
import { CartaoDeCredito } from '../../model/CartaoDeCredito';
import { Endereco } from '../../model/Endereco';
import { BoletoBancario, IBoletoBancario } from 'src/app/model/BoletoBancario';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public cliente: Cliente = new Cliente();
  dataAtualizacao: Date = new Date;

  constructor() { }

  ngOnInit(): void {
    this.cliente.setNome("Nilson Ramos");
    this.cliente.setEndereco(new Endereco({
      cep: 49123999,
      pais: "Brasil",
      estado: "Sergipe",
      cidade: "Aracaju",
      bairro: "Centro",
      rua: "Rua dos Cajueiros",
      numero: 100
    }));

    this.cliente.addMeioDePagamento(new BoletoBancario({
      emissor: "Banco do Planeta",
      valor: 100,
      codigo_barras: "789456123",
      vencimento: new Date()
    }));

    this.cliente.addMeioDePagamento(new CartaoDeCredito({
      emissor: "Super Card",
      ccv: 123,
      numero: 123412341234,
      limite: 5000,
      validade: new Date(),
      moeda: "BRL" //Real
    }));

    this.cliente.addMeioDePagamento(new CartaoDeCredito({
      emissor: "Super Card",
      ccv: 123,
      numero: 123412341234,
      limite: 5000,
      validade: new Date(),
      moeda: "BRL" //Real
    }));

  }

  savarEndereco(event: any) {
    console.log(event);
    this.cliente.endereco = event;
    this.dataAtualizacao = new Date();

  }

}
