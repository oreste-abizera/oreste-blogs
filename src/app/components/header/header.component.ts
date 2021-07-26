import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('heading') heading = '';
  @Input('subheading') subheading = '';
  @Input('isFull') isFull = false;
  @Input('imageUrl') imageUrl = 'assets/img/home-bg.jpg';
  finalImageUrl = `url(${this.imageUrl})`;

  constructor() {}

  ngOnInit(): void {}
}
