import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIntroComponent } from './course-intro.component';

describe('CourseIntroComponent', () => {
  let component: CourseIntroComponent;
  let fixture: ComponentFixture<CourseIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
