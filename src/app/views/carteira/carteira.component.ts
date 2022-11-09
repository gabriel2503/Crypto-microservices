import { Component, OnInit } from '@angular/core';
import { CryptoElement } from '../home/home.component';

const CARTEIRA_DATA: CryptoElement[] = [
  {position: 1, codigo: 'BTC', nome: 'Bitcoin', cotacao_compra: 1.0079, cotacao_venda: 1.0079, variacao: 0.25, quantidade: 150},
  {position: 2, codigo: 'ETH', nome: 'Ethereum', cotacao_compra: 4.0026, cotacao_venda: 4.0026, variacao: 0.25, quantidade: 300},
  {position: 3, codigo: 'USDT', nome: 'Tether', cotacao_compra: 6.941, cotacao_venda: 6.941, variacao: 0.25, quantidade: 450},
];

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.scss']
})
export class CarteiraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
