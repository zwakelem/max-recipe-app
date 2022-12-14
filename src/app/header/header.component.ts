import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   
  @Output() loadedFeature = new EventEmitter<string>();

  onSelectFeature(feature: string) {
    this.loadedFeature.emit(feature);
  }

}
