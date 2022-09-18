import { Injectable } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class IconService {
  iconList = [
    { name: 'smile', fileName: 'smile.svg' },
    { name: 'bad', fileName: 'bad.svg' },
    { name: 'normal', fileName: 'normal.svg' },
    { name: 'cool', fileName: 'cool.svg' },
    { name: 'camera', fileName: 'camera.svg' },
  ]
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    this.iconList.forEach(i => {
      this.matIconRegistry.addSvgIcon(
        i.name,
        this.domSanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${i.fileName}`)
      );
    });
  }
}
