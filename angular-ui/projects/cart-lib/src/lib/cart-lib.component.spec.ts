import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLibComponent } from './cart-lib.component';

describe('CartLibComponent', () => {
  let component: CartLibComponent;
  let fixture: ComponentFixture<CartLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
