import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NagivationComponent } from './nagivation.component';

describe('NagivationComponent', () => {
  let component: NagivationComponent;
  let fixture: ComponentFixture<NagivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NagivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NagivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
