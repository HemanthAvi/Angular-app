import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements AfterViewInit {

  title = 'Blog-app';
  parentMessage: string = "Message from parent coponent";
  meassage: string = "";
  @ViewChild(PostComponent) childComp: PostComponent;

  constructor() { }

  ngAfterViewInit(): void {
    console.log("From app component :: ", this.childComp.childTitle);
    this.meassage = this.childComp.childTitle;
  }
}
