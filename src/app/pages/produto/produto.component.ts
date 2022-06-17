import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {

  listOfData: any[] = [
    {
      id: '1',
      nome: 'POLIA',
    },
    {
      id: '2',
      nome: 'PARAFUSO',
    },
    {
      id: '3',
      nome: 'ANEL LABIRINTO',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
