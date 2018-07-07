import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChinhSachComponent } from './chinh-sach.component';

describe('ChinhSachComponent', () => {
  let component: ChinhSachComponent;
  let fixture: ComponentFixture<ChinhSachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinhSachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChinhSachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
