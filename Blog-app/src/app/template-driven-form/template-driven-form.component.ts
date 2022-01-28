import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm) {
    console.log(formData.value);
  }

  getNameValue(name: FormControl) {
    console.log(name);
  }

  getEmail(email: FormControl) {
    console.log(email);
  }

}
