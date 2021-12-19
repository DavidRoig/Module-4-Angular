import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  ImageProviderService,
  Image,
} from '../../services/image.provider.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  private readonly intervalTime = 2000;
  private imageInterval: any;
  readonly selectedIndexInitial = 0;
  zoomLevel = 1;
  isPlaying: boolean = false;
  imageList: Image[];
  imageSelectedIndex: number = this.selectedIndexInitial;

  @ViewChild('imageSelected') imageSelectedDom: ElementRef;

  constructor(imageProviderService: ImageProviderService) {
    this.imageList = imageProviderService.getList();
  }

  imageGalerySelected(imageIndexSelected: number): void {
    this.imageSelectedIndex = imageIndexSelected;
  }

  nextImage() {
    this.imageSelectedIndex++;
  }

  backImage() {
    this.imageSelectedIndex--;
  }

  zoomIn() {
    this.zoomLevel++;
    this.applyZoom();
  }

  zoomOut() {
    this.zoomLevel--;
    this.applyZoom();
  }

  private applyZoom() {
    (<HTMLImageElement>this.imageSelectedDom.nativeElement).style.setProperty(
      '--zoom',
      this.zoomLevel.toString()
    );
  }

  play() {
    this.togglePlaying();
    this.imageInterval = setInterval(() => {
      if (this.imageSelectedIndex === this.imageList.length - 1) {
        this.imageSelectedIndex = this.selectedIndexInitial;
        return;
      }
      this.imageSelectedIndex++;
    }, this.intervalTime);
  }

  stop() {
    this.togglePlaying();
    clearInterval(this.imageInterval);
  }
  private togglePlaying() {
    this.isPlaying = !this.isPlaying;
  }
  getCurrentUrl = (): string => this.imageList[this.imageSelectedIndex]?.src;
}
