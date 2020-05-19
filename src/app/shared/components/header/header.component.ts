import { Component, OnInit } from '@angular/core';
import { UiConfigService } from 'src/app/services/ui-config.service';

@Component({
  selector: 'guru-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openNav: boolean = false;
  toolbarTitle: string;
  constructor(private uiConfigSvc: UiConfigService) { }

  ngOnInit(): void {
  }

  toggleSideNav(){
    this.openNav = !this.openNav
    this.uiConfigSvc.toggleSlideNav(this.openNav)
  }

}
