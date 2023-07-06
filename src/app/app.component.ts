import { Component } from '@angular/core';
import { FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get userName(){
    return this.registrationForm.get('userName');
  }

constructor(private fb: FormBuilder){}

registrationForm = this.fb.group({
  userName: ['', [Validators.required, Validators.minLength(3)]],
  password: [''],
  confirmPassword: [''],
  address: this.fb.group({
    city: [''],
    state: [''],
    postalCode: ['']
  })
});

 loadApiData(){ 
  
  this.registrationForm.patchValue({
    userName:'Mahesh',
    password: 'dateOfBirth',
    confirmPassword: 'dateOfBirth'
  })
 }


}
