import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiConfigService } from './services/ui-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guru-ui';

  open: boolean = false;
  private slideNavSubscription: Subscription;
  constructor(private router: Router, private uiConfigSvc: UiConfigService ) { }

  ngOnInit(): void {
    this.slideNavSubscription = this.uiConfigSvc.onSlideNavToggle.subscribe((result) => {
      this.open = result;
    })
  }

  ngOnDestroy(): void{
    if(this.slideNavSubscription){
      this.slideNavSubscription.unsubscribe();
    }
  }
}
