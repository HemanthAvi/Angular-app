import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'example-reactive-form',
  templateUrl: './example-reactive-form.component.html',
  styleUrls: ['./example-reactive-form.component.css']
})
export class ExampleReactiveFormComponent implements OnInit {
  loginForm: FormGroup;
  passwordRegex: string = ".{8,}";


  constructor(fb: FormBuilder) {

    this.loginForm = fb.group({
      userName: ['', [
        Validators.required,
        noSpace.noSpaceValidations
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(this.passwordRegex)
      ]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
  get fc() {
    return this.loginForm.controls;
  }
}
