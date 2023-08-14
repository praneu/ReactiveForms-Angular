import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';
import { PasswordValidator } from './shared/password.validators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  registrationForm!: FormGroup;

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email () {
    return this.registrationForm.get('email');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe:[false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, {validator: PasswordValidator} );

    this.registrationForm.get('subscribe')?.valueChanges
        .subscribe(checkedValue =>{
          const email = this.registrationForm.get('email');
          if (checkedValue){
            email?.setValidators(Validators.required);
          } else {
            email?.clearValidators();
          }
          email?.updateValueAndValidity();
        });
  }

 
  loadApiData() {

    this.registrationForm.patchValue({
      userName: 'Mahesh',
      password: 'dateOfBirth',
      confirmPassword: 'dateOfBirth'
    })

  }
}
