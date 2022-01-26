import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  title: string = "List of posts";
  childTitle: string = "Post list component from Post component";
  childData: string = "";

  @Input() fromParent: string;
  @ViewChild(PostListComponent) postChildComponent: PostListComponent;

  constructor() {
    console.log(this.postChildComponent);
  }

  ngOnInit(): void { }

  catchData(ev) {
    this.childData = ev;
  }

}
