import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonThreeComponent } from './lesson-three.component';

describe('LessonThreeComponent', () => {
  let component: LessonThreeComponent;
  let fixture: ComponentFixture<LessonThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
