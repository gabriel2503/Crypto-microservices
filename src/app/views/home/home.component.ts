import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { Router } from '@angular/router';

export interface CryptoElement {
  position: number;
  codigo: string;
  nome: string;
  cotacao_compra: number;
  cotacao_venda: number;
  variacao: number;
  quantidade: number
}

const ELEMENT_DATA: CryptoElement[] = [
  {position: 1, codigo: 'BTC', nome: 'Bitcoin', cotacao_compra: 1.0079, cotacao_venda: 1.0079, variacao: 0.25, quantidade: 0},
  {position: 2, codigo: 'ETH', nome: 'Ethereum', cotacao_compra: 4.0026, cotacao_venda: 4.0026, variacao: 0.25, quantidade: 0},
  {position: 3, codigo: 'USDT', nome: 'Tether', cotacao_compra: 6.941, cotacao_venda: 6.941, variacao: 0.25, quantidade: 0},
  {position: 4, codigo: 'BNB', nome: 'BNB', cotacao_compra: 9.0122, cotacao_venda: 9.0122, variacao: 0.25, quantidade: 0},
  {position: 5, codigo: 'USDC', nome: 'USD Coin', cotacao_compra: 10.811, cotacao_venda: 10.811, variacao: 0.25, quantidade: 0},
  {position: 6, codigo: 'BUSD', nome: 'Binance USD', cotacao_compra: 12.0107, cotacao_venda: 12.0107, variacao: 0.25, quantidade: 0},
  {position: 7, codigo: 'XRP', nome: '	XRP', cotacao_compra: 14.0067, cotacao_venda: 14.0067, variacao: 0.25, quantidade: 0},
  {position: 8, codigo: 'ADA', nome: 'Cardano', cotacao_compra: 15.9994, cotacao_venda: 15.9994, variacao: 0.25, quantidade: 0},
  {position: 9, codigo: 'DOGE', nome: 'Dogecoin', cotacao_compra: 18.9984, cotacao_venda: 18.9984, variacao: 0.25, quantidade: 0},
  {position: 10, codigo: 'MATIC', nome: 'Polygon', cotacao_compra: 20.1797, cotacao_venda: 20.1797, variacao: 0.25, quantidade: 0},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'codigo', 'nome', 'cotacao_compra', 'cotacao_venda' , 'variacao', 'comprar'];
  dataSource = ELEMENT_DATA;
 
  constructor(public dialog: MatDialog, private router: Router) {}


  ngOnInit(): void {
  }

  navigateToCarteira(){
    this.router.navigate(["carteira"]);
  }


  openDialog(element: CryptoElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: element === null ? {
        position: null,
        codigo: '',
        nome: '',
        cotacao_compra: null,
        cotacao_venda: null,
        variacao: null,
        quantidade: null

       } : {
        position: element.position,
        codigo: element.codigo,
        nome: element.nome,
        cotacao_compra: element.cotacao_compra,
        cotacao_venda: element.cotacao_venda,
        variacao: element.variacao,
        quantidade: element.quantidade
       } 
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined) {
        if (this.dataSource.map(p => p.position).includes(result.position)){
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
      }
    });
  }

  deleteElement(position: number): void{
    this.dataSource = this.dataSource.filter(p=> p.position !== position)
  }

  buyElement(element: CryptoElement): void{
    this.openDialog(element);
  }
  }
