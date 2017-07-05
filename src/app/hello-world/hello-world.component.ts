import { Component, OnInit } from '@angular/core';
import { Article } from '../article/article.model';
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  articles: Article[];
  constructor() {
    this.articles = [];
   }

  ngOnInit() {
  }

  onSubmit(name: HTMLInputElement, say: HTMLTextAreaElement): boolean {
    this.articles.push(new Article(name.value, say.value));
    name.value = '';
    say.value = '';
    return false;
  }
}

