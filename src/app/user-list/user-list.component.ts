import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[];
  constructor() {
    this.names = ['邱上哲', '钊彬', '李臣臣', '梁鹏飞', '彭俊凯'];
  }

  ngOnInit() {
  }

}
