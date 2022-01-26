import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  messageToParent: string = "This is a meassage to parent from Post-list component";

  @Output() messageEvent = new EventEmitter();
  @Input() toPostListChild: string;

  constructor() { }

  ngOnInit(): void { }

  sendToParent(): void {
    this.messageEvent.emit(this.messageToParent);
  }

}
