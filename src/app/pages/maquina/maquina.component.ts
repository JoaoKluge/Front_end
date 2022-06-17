import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maquina',
  templateUrl: './maquina.component.html',
  styleUrls: ['./maquina.component.scss']
})
export class MaquinaComponent implements OnInit {

  listOfData: any[] = [
    {
      codigo: '1',
      nome: 'BROTHER TC 300',
      setor:'Centro de Usinagem',

    },
    {
      codigo: '2',
      nome: 'BROTHER TC 500',
      setor:'Centro de Usinagem',
    
    },
    {
      codigo: '3',
      nome: 'PUMA 500',
      setor: 'Torno CNC'
    
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
