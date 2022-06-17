import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemproducaoeditComponent } from './ordemproducaoedit.component';

describe('OrdemproducaoeditComponent', () => {
  let component: OrdemproducaoeditComponent;
  let fixture: ComponentFixture<OrdemproducaoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemproducaoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemproducaoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
