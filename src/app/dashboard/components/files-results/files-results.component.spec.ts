import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesResultsComponent } from './files-results.component';

describe('FilesResultsComponent', () => {
  let component: FilesResultsComponent;
  let fixture: ComponentFixture<FilesResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
