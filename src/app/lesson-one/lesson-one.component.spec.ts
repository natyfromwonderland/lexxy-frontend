import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneComponent } from './lesson-one.component';

describe('LessonOneComponent', () => {
  let component: LessonOneComponent;
  let fixture: ComponentFixture<LessonOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
