import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopBaiComponent } from './nop-bai.component';

describe('NopBaiComponent', () => {
  let component: NopBaiComponent;
  let fixture: ComponentFixture<NopBaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopBaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopBaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
