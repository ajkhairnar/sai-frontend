import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypemilkComponent } from './typemilk.component';

describe('TypemilkComponent', () => {
  let component: TypemilkComponent;
  let fixture: ComponentFixture<TypemilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypemilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypemilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
