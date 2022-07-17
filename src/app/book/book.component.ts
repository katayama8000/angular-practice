import { Component, Input, OnInit } from '@angular/core';
import { Books } from '../type/book-type';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() dataFromParent: String = '';

  books: Books[] = [
    {
      isbn: '978-4-7741-8411-1',
      title: 'サイコロを投げる',
      price: 3000,
      publisher: '翔泳社',
    },
    {
      isbn: '978-4-7741-8411-2',
      title: 'サイコロを投げる2',
      price: 3100,
      publisher: '翔泳社',
    },
  ];
}
