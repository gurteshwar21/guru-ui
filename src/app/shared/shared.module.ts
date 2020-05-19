import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_CONTROLS } from './app-material-controls';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule} from '@angular/flex-layout'


@NgModule({
  declarations: [SideNavComponent, HeaderComponent],
  exports: [SideNavComponent, HeaderComponent],
  imports: [
    CommonModule,          
    MATERIAL_CONTROLS,
    FlexLayoutModule
  ]    
})
export class SharedModule { }
