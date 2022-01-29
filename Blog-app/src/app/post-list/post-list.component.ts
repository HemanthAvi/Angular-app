import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  messageToParent: string = "This is a meassage to parent from Post-list component";

  @Output() messageEvent = new EventEmitter();
  @Input() toPostListChild: string;

  posts : Post[] = [
    {
      id: 1,
      title: 'Title 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam eius et ab dolores ad consectetur voluptatibus dicta facere blanditiis.',
    },
    {
      id: 2,
      title: 'Title 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam eius et ab dolores ad consectetur voluptatibus dicta facere blanditiis.'
    },
    {
      id: 3,
      title: 'Title 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam eius et ab dolores ad consectetur voluptatibus dicta facere blanditiis.'
    },
    {
      id: 4,
      title: 'Title 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam eius et ab dolores ad consectetur voluptatibus dicta facere blanditiis.'
    },
    {
      id: 5,
      title: 'Title 5',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quisquam eius et ab dolores ad consectetur voluptatibus dicta facere blanditiis.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
    let obser$ = new Observable( observer => {
      console.log('printed from observer');
    }).subscribe();
   }

  sendToParent(): void {
    this.messageEvent.emit(this.messageToParent);
  }
}

export class Post {
  id : number;
  title : string;
  content : string;
}