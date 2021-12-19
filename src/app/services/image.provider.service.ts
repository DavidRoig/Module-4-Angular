import { Injectable } from '@angular/core';

export interface Image {
  id: number;
  src: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class ImageProviderService {
  private imageList: Image[];

  constructor() {
    this.initImageList();
  }
  initImageList() {
    this.imageList = [
      { id: 1, src: 'assets/octopus.jpeg', title: 'Octopus Man' },
      { id: 2, src: 'assets/wickedBeth.jpeg', title: 'Wicker Beth' },
      { id: 3, src: 'assets/Snuffles.jpeg', title: 'Snuffles' },
      { id: 4, src: 'assets/TruthTortoise.jpeg', title: 'Truth Tortoise' },
      { id: 5, src: 'assets/Anchorman.jpeg', title: 'Anchorman Man' },
      { id: 6, src: 'assets/Rick.jpeg', title: 'Rick' },
      { id: 7, src: 'assets/MortySmith.jpeg', title: 'Morty Smith' },
      { id: 8, src: 'assets/SummerSmith.jpeg', title: 'Summer Smith' },
    ];
  }

  getList = (): Image[] => this.imageList;
}
