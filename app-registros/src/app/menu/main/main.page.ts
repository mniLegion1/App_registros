import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
  ];
  public labels = ['Family'];

  constructor() { }

  ngOnInit() {
  }

}
