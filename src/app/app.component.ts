import { Component } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private fb: FormBuilder){}

registrationForm = this.fb.group({
  userName: ['Viswash'],
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
