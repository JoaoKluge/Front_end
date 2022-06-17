import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-funcionarioedit',
  templateUrl: './funcionarioedit.component.html',
  styleUrls: ['./funcionarioedit.component.scss']
})
export class FuncionarioeditComponent implements OnInit {

  public funcionarioForm: FormGroup;
  public funcionario = {
    nome: '',
    sobrenome: '',
    setor: '',
  };

  constructor(private fb: FormBuilder) {
    // Create FormGroup
    this.funcionarioForm = this.fb.group({
      nome: '',
      sobrenome: '',
      setor: '',
    });

    // Set Values
    this.funcionarioForm.controls['nome'].setValue(this.funcionario.nome);
    this.funcionarioForm.controls['sobrenome'].setValue(this.funcionario.sobrenome);
    this.funcionarioForm.controls['setor'].setValue(this.funcionario.setor);
  }

  ngOnInit(): void {}

  resetForm() {
    this.funcionarioForm.controls['nome'].setValue(this.funcionario.nome);
    this.funcionarioForm.controls['empresa'].setValue(this.funcionario.sobrenome);
    this.funcionarioForm.controls['cnpj'].setValue(this.funcionario.setor);
  }

  saveForm() {
    this.funcionario = this.funcionarioForm.value;
  }

}
