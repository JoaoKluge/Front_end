import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produtoedit',
  templateUrl: './produtoedit.component.html',
  styleUrls: ['./produtoedit.component.scss']
})
export class ProdutoeditComponent implements OnInit {

  public produtoForm: FormGroup;
  public produto = {
    nome: '',
  };

  constructor(private fb: FormBuilder) {
    // Create FormGroup
    this.produtoForm = this.fb.group({
      nome: '',
    });

    // Set Values
    this.produtoForm.controls['nome'].setValue(this.produto.nome);
  }

  ngOnInit(): void {}

  resetForm() {
    this.produtoForm.controls['nome'].setValue(this.produto.nome);
  }

  saveForm() {
    this.produto = this.produtoForm.value;
  }


}
