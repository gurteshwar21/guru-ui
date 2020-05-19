import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './page/main/main.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { MATERIAL_CONTROLS } from '../shared/app-material-controls';
import { SharedModule } from '../shared/shared.module';
import { FilesUploadingComponent } from './components/files-uploading/files-uploading.component';
import { FilesResultsComponent } from './components/files-results/files-results.component';



@NgModule({
  declarations: [MainComponent, FileUploadComponent, FilesUploadingComponent, FilesResultsComponent],
  entryComponents: [MainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MATERIAL_CONTROLS,
    SharedModule
  ]
})
export class DashboardModule { }
