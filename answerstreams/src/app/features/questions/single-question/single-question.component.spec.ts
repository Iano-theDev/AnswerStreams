import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuestionComponent } from './single-question.component';

describe('SingleQuestionComponent', () => {
  let component: SingleQuestionComponent;
  let fixture: ComponentFixture<SingleQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SingleQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
