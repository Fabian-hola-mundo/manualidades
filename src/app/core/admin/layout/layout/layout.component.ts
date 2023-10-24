import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  sidebar!: boolean | false;
  screenWidth: number = window.innerWidth;
  modeSidebar : 'side' | 'over' = 'side'
  widthSidebar : '90' | 'auto' = 'auto'

  showSideBarOnScreen() {
    if (this.screenWidth < 1007) {
      this.sidebar = false;
      this.modeSidebar = 'over'
      this.widthSidebar = '90'
    } else {
      this.sidebar = true;
    }
  }

  changeSidebar() {
    this.sidebar = !this.sidebar;
  }

  ngOnInit(): void {
    this.showSideBarOnScreen();
  }
}
