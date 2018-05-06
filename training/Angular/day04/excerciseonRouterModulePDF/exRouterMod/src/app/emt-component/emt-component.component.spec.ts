import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtComponentComponent } from './emt-component.component';

describe('EmtComponentComponent', () => {
  let component: EmtComponentComponent;
  let fixture: ComponentFixture<EmtComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmtComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmtComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
