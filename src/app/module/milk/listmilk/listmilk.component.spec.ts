import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmilkComponent } from './listmilk.component';

describe('ListmilkComponent', () => {
  let component: ListmilkComponent;
  let fixture: ComponentFixture<ListmilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
