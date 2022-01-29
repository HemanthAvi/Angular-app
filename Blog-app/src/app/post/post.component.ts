import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private route: ActivatedRoute) {
    // console.log(this.postChildComponent);
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      console.log(value);
      let id = value.get('id');
      console.log(id);
    })

    
  }

  catchData(ev) {
    this.childData = ev;
  }

}
