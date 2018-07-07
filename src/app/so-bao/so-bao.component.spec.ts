import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoBaoComponent } from './so-bao.component';

describe('SoBaoComponent', () => {
  let component: SoBaoComponent;
  let fixture: ComponentFixture<SoBaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoBaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
