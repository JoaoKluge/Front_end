import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  listOfData: any[] = [
    {
      id: '1',
      nome: 'John Brown',
      empresa:'STK',
      cnpj:'098.989.983-43',
    },
    {
      id: '2',
      nome: 'Jim Green',
      empresa:'SENIOR',
      cnpj:'768.485.094-39',
    
    },
    {
      id: '3',
      nome: 'Joe Black',
      empresa:'VALLUES',
      cnpj:'758.837.566-34',
    
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
