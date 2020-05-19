import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiConfigService {
  onSlideNavToggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    
   }
   toggleSlideNav(open: boolean){
     this.onSlideNavToggle.emit(open);
   }
}
