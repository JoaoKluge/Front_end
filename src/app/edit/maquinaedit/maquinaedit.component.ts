import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-maquinaedit',
  templateUrl: './maquinaedit.component.html',
  styleUrls: ['./maquinaedit.component.scss']
})
export class MaquinaeditComponent implements OnInit {

  public maquinaForm: FormGroup;
  public maquina = {
    nome: '',
    setor: '',
  };

  constructor(private fb: FormBuilder) {
    // Create FormGroup
    this.maquinaForm = this.fb.group({
      nome: '',
      setor: '',
    });

    // Set Values
    this.maquinaForm.controls['nome'].setValue(this.maquina.nome);
    this.maquinaForm.controls['setor'].setValue(this.maquina.setor);
  }

  ngOnInit(): void {}

  resetForm() {
    this.maquinaForm.controls['nome'].setValue(this.maquina.nome);
    this.maquinaForm.controls['setor'].setValue(this.maquina.setor);
  }

  saveForm() {
    this.maquina = this.maquinaForm.value;
  }

}
