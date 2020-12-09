import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './view/cliente/cliente.component';
import { EnderecoComponent } from './view/endereco/endereco.component';
import { MeioDePagamentoComponent } from './view/meio-de-pagamento/meio-de-pagamento.component';
import { ProdutoComponent } from './view/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    EnderecoComponent,
    MeioDePagamentoComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
