import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form: FormGroup;
  emailRegex: string = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  phoneNumberPattern = "[789][0-9]{9}";

  name: string;
  emailId: string;
  addr: string;
  shippingAdd: string;


  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]],
      contactDetails: fb.group({
        address: ['', [Validators.required]],
        shippingAddress: ['', [Validators.required]],
        phoneNumber: ['', [
          Validators.required,
          Validators.pattern(this.phoneNumberPattern)]],
      }),
      skills: new FormArray([])
    })

    // this.form = new FormGroup({
    //     fullName: new FormControl('', [

    //     ]),
    //     email: new FormControl('', [

    //     ]),
    //     contactDetails: new FormGroup({
    //       address: new FormControl('', []),
    //       shippingAddress: new FormControl('', [Validators.required]),
    //       phoneNumber: new FormControl('', [
    //         Validators.required,
    //         Validators.pattern(this.phoneNumberPattern)])
    //     }),
       
    //   });
    }

  ngOnInit(): void {}

  get fullname() {
      return this.form.get('fullName');
    }

  get email() {
      return this.form.get('email');
    }

  get address() {
      return this.form.get('contactDetails.address');
    }

  get shippingAddress() {
      return this.form.get('contactDetails.shippingAddress');
    }

  get phoneNumber() {
      return this.form.get('contactDetails.phoneNumber');
    }
    
  get skills() {
      return this.form.get('skills') as FormArray;
    }

  onSubmit() {
      console.log(this.form.value);
    }

  addSkills(skill: HTMLInputElement) {
      this.skills.push(new FormControl(skill.value));
      skill.value = "";
      // console.log(this.form.value);
    }

  removeSkills(itemId:number) {
      this.skills.removeAt(itemId);
    }

}
