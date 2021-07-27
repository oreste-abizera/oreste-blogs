import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css'],
})
export class BlogsListComponent implements OnInit {
  blogs: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    this.blogs = [
      {
        id: 1,
        title: 'Man must explore, and this is exploration at its greatest',
        subtitle: 'Problems look mighty small from 150 miles up',
        author: 'Oreste Abizera',
        date: 'January 20, 2021',
      },
      {
        id: 2,
        title:
          "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
        author: 'Oreste Abizera',
        date: 'January 25, 2021',
      },
      {
        id: 3,
        title: 'Science has not yet mastered prophecy',
        subtitle:
          'We predict too much for the next year and yet far too little for the next ten.',
        author: 'Oreste Abizera',
        date: 'January 28, 2021',
      },
      {
        id: 4,
        title: 'Failure is not an option',
        subtitle:
          'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
        author: 'Oreste Abizera',
        date: 'January 28, 2021',
      },
    ];
  }
}
