import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTwoComponent } from './lesson-two.component';

describe('LessonTwoComponent', () => {
  let component: LessonTwoComponent;
  let fixture: ComponentFixture<LessonTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
