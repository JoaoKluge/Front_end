import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {

  listOfData: any[] = [
    {
      id: '1',
      nome: 'John',
      sobrenome:'Brown',
      setor:'Centro de Usinagem',
    },
    {
      id: '2',
      nome: 'Jim',
      sobrenome:'Green',
      setor:'Centro de Usinagem',
    
    },
    {
      id: '3',
      nome: 'Joe',
      sobrenome:'Black',
      setor:'Torno CNC',
    
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
