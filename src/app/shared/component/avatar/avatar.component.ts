import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.sass'],
})
export class AvatarComponent implements OnInit {
  @Input() image = '';
  @Input() size: any = '';

  constructor() {}

  ngOnInit(): void {}

  get backgroundImage(): string {
    const src = this.image || 'assets/images/sources/01.jpg';
    return `url(${src})`;
  }
}
