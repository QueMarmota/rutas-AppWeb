import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnsultarComponent } from './connsultar.component';

describe('ConnsultarComponent', () => {
  let component: ConnsultarComponent;
  let fixture: ComponentFixture<ConnsultarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnsultarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnsultarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
