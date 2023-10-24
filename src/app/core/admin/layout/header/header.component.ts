import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() sidebarOutput = new EventEmitter<boolean>();

  @Input() sidebarchild = true

  sidebar: boolean = false

  changeSidebar() {
    this.sidebarOutput.emit()
  }

  constructor(

  ){

  }

}
