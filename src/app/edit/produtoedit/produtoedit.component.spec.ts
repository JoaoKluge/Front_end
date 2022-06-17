import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoeditComponent } from './produtoedit.component';

describe('ProdutoeditComponent', () => {
  let component: ProdutoeditComponent;
  let fixture: ComponentFixture<ProdutoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
