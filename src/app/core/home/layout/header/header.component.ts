import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  lastScrollPosition = 0;
  isScrollingUp = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPosition = window.pageYOffset;
    this.isScrollingUp = currentScrollPosition < this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }

}
