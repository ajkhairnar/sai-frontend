import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatemilkComponent } from './ratemilk.component';

describe('RatemilkComponent', () => {
  let component: RatemilkComponent;
  let fixture: ComponentFixture<RatemilkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatemilkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatemilkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
