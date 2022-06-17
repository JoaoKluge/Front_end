import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-clienteedit',
  templateUrl: './clienteedit.component.html',
  styleUrls: ['./clienteedit.component.scss'],
})
export class ClienteeditComponent implements OnInit {
  public clienteForm: FormGroup;
  public cliente = {
    nome: '',
    empresa: '',
    cnpj: '',
  };

  constructor(private fb: FormBuilder) {
    // Create FormGroup
    this.clienteForm = this.fb.group({
      nome: '',
      empresa: '',
      cnpj: '',
    });

    // Set Values
    this.clienteForm.controls['nome'].setValue(this.cliente.nome);
    this.clienteForm.controls['empresa'].setValue(this.cliente.empresa);
    this.clienteForm.controls['cnpj'].setValue(this.cliente.cnpj);
  }

  ngOnInit(): void {}

  resetForm() {
    this.clienteForm.controls['nome'].setValue(this.cliente.nome);
    this.clienteForm.controls['empresa'].setValue(this.cliente.empresa);
    this.clienteForm.controls['cnpj'].setValue(this.cliente.cnpj);
  }

  saveForm() {
    this.cliente = this.clienteForm.value;
  }
}
