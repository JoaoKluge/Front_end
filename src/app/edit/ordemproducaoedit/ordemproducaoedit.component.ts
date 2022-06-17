import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ordemproducaoedit',
  templateUrl: './ordemproducaoedit.component.html',
  styleUrls: ['./ordemproducaoedit.component.scss'],
})
export class OrdemproducaoeditComponent implements OnInit {
  public ordemproducaoForm: FormGroup;
  public ordemproducao = {
    cliente: '',
    produto: '',
    maquina: '',
    funcionario: '',
    quantidade: '',
  };

  constructor(private fb: FormBuilder) {
    // Create FormGroup
    this.ordemproducaoForm = this.fb.group({
      cliente: '',
      produto: '',
      maquina: '',
      funcionario: '',
      quantidade: '',
    });

    // Set Values
    this.ordemproducaoForm.controls['cliente'].setValue(
      this.ordemproducao.cliente
    );
    this.ordemproducaoForm.controls['produto'].setValue(
      this.ordemproducao.produto
    );
    this.ordemproducaoForm.controls['maquina'].setValue(
      this.ordemproducao.maquina
    );
    this.ordemproducaoForm.controls['funcionario'].setValue(
      this.ordemproducao.funcionario
    );
    this.ordemproducaoForm.controls['quantidade'].setValue(
      this.ordemproducao.quantidade
    );
  }

  ngOnInit(): void {}

  resetForm() {
    this.ordemproducaoForm.controls['cliente'].setValue(
      this.ordemproducao.cliente
    );
    this.ordemproducaoForm.controls['produto'].setValue(
      this.ordemproducao.produto
    );
    this.ordemproducaoForm.controls['maquina'].setValue(
      this.ordemproducao.maquina
    );
    this.ordemproducaoForm.controls['funcionario'].setValue(
      this.ordemproducao.funcionario
    );
    this.ordemproducaoForm.controls['quantidade'].setValue(
      this.ordemproducao.quantidade
    );
  }

  saveForm() {
    this.ordemproducao = this.ordemproducaoForm.value;
  }
}
