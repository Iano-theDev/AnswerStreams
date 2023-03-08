import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuestionsComponent } from './manage-questions.component';

describe('ManageQuestionsComponent', () => {
  let component: ManageQuestionsComponent;
  let fixture: ComponentFixture<ManageQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ManageQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
