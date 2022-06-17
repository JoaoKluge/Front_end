import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioeditComponent } from './funcionarioedit.component';

describe('FuncionarioeditComponent', () => {
  let component: FuncionarioeditComponent;
  let fixture: ComponentFixture<FuncionarioeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncionarioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
