import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Blog-app';
  parentMessage: string = "Message from parent coponent";
  meassage: string = "";
  userName: string = "";
  formHeader: string = "";
  imgUrl: string;
  formBody: string = "";
  bool: boolean = false;
  name: string;
  email: string;
  address: string;
  userArray: Array<any> = [];
  dummyText: string = "Array of object Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eligendi perferendis vero possimus, fugit ea nostrum architecto numquam soluta consequatur aliquam quos. Velit temporibus sapiente impedit maxime deserunt esse, delectus debitis id aut quia voluptatum officia totam inventore, repudiandae consequuntur porro? Tempora ipsam ab libero sapiente error nesciunt ad laudantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut a temporibus unde nihil vitae praesentium, corrupti quia? Illum iure quasi harum, quo voluptatem fuga nihil doloribus alias dicta beatae.";
  posts: Array<any>;

  @ViewChild(PostComponent) childComp: PostComponent;

  constructor(private postService: PostService) {
    this.posts = postService.postList;
  }

  buttonClick() {
    console.log("clicked");
  }

  onKeyUp() {
    console.log(this.userName);
  }

  captureClickEvent() {
    console.log(this.bool);
    this.bool = true;
  }

  addNew() {
    this.posts.push({ id: 6, post: "lavander" });
  }

  onDelete(item) {
    this.posts = this.posts.filter(obj => obj.id !== item.id);
  }

  saveData() {
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address
    });
  }

  addNewPost() {
    var lentgth: number = this.posts.length;
    let newPost: Post = {
      id: lentgth + 1,
      post: "color"
    }
    this.postService.saveData(newPost);
  }
}