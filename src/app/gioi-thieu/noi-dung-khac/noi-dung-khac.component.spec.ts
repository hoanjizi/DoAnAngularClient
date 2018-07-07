import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoiDungKhacComponent } from './noi-dung-khac.component';

describe('NoiDungKhacComponent', () => {
  let component: NoiDungKhacComponent;
  let fixture: ComponentFixture<NoiDungKhacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoiDungKhacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoiDungKhacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
