import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorasComponent } from './floras.component';

describe('FlorasComponent', () => {
  let component: FlorasComponent;
  let fixture: ComponentFixture<FlorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
