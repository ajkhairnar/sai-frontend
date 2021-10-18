import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListareaComponent } from './listarea.component';

describe('ListareaComponent', () => {
  let component: ListareaComponent;
  let fixture: ComponentFixture<ListareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
