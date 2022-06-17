import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordemproducao',
  templateUrl: './ordemproducao.component.html',
  styleUrls: ['./ordemproducao.component.scss']
})
export class OrdemproducaoComponent implements OnInit {

  listOfData: any[] = [
    {
      op: '1',
      cliente:'STK',
      produto: 'Polia',
      maquina: 'Torno CNC',
      funcionario: 'John Brown',
      quantidade: '10000',
    },
    {
      op: '2',
      cliente:'SENIOR',
      produto:'Parafuso',
      maquina:'Centro de Usinagem',
      funcionario: 'Jim Green',
      quantidade:'10000',
    
    },
    {
      op: '3',
      cliente:'VALLUES',
      produto:'Anel labirinto',
      maquina:'Centro de Usinagem',
      funcionario: 'Joe Black',
      quantidade:'500',
    
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
