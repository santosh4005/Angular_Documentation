import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaylipsumComponent } from './displaylipsum.component';

describe('DisplaylipsumComponent', () => {
  let component: DisplaylipsumComponent;
  let fixture: ComponentFixture<DisplaylipsumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaylipsumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaylipsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
