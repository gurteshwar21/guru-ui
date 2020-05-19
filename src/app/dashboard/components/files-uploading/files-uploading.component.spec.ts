import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUploadingComponent } from './files-uploading.component';

describe('FilesUploadingComponent', () => {
  let component: FilesUploadingComponent;
  let fixture: ComponentFixture<FilesUploadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesUploadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesUploadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
