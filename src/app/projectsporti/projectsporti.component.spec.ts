import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsportiComponent } from './projectsporti.component';

describe('ProjectsportiComponent', () => {
  let component: ProjectsportiComponent;
  let fixture: ComponentFixture<ProjectsportiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsportiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsportiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
