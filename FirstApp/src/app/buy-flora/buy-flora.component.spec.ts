import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFloraComponent } from './buy-flora.component';

describe('BuyFloraComponent', () => {
  let component: BuyFloraComponent;
  let fixture: ComponentFixture<BuyFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyFloraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
