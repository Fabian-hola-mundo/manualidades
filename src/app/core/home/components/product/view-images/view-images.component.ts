import { Component, OnInit } from '@angular/core';
import { ImageSelectedService } from '../image-selected.service';

@Component({
  selector: 'app-view-images',
  templateUrl: './view-images.component.html',
  styleUrls: ['./view-images.component.scss'],
})
export class ViewImagesComponent implements OnInit {
  allImages: string[] = [];
  imageSelected!: number;
  startY = 0;

  constructor(private imagesService: ImageSelectedService) {}

  ngOnInit(): void {
    this.allImages = this.imagesService.getImagesSelected();
    this.imageSelected = this.imagesService.imageSelected;
  }

  nextImage() {
    if (this.imageSelected === this.allImages.length - 1) {
      this.imageSelected = 0;
    } else if (this.imageSelected <= this.allImages.length) {
      this.imageSelected++;
    }
  }

}
