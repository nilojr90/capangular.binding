import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Endereco, IEndereco } from '../../model/Endereco';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() endereco: Endereco = {};

  @Output('salvar') saveEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  fnSalvar() {
    this.saveEvent.emit(this.endereco);
  }

}
