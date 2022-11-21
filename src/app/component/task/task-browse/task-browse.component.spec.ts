import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBrowseComponent } from './task-browse.component';

describe('TaskBrowseComponent', () => {
  let component: TaskBrowseComponent;
  let fixture: ComponentFixture<TaskBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBrowseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
