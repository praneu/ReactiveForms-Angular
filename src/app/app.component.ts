import { Component } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  registrationForm created with FormGroup & FormControl
//  registrationForm = new FormGroup({
//   userName: new FormControl(''),
//   password: new FormControl(''),
//   confirmPassword: new FormControl(''),
//   address: new FormGroup({
//     city: new FormControl(''),
//     state: new FormControl(''),
//     postalCode: new FormControl('')
//   })
// });
constructor(private fb: FormBuilder){}
// registration form created with Formbuilder
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
  //setValue() follows a strict format of the formControl and all the controls must be defined
  // this.registrationForm.setValue({
  //   userName:'Sheriff',
  //   password:'test',
  //   confirmPassword: 'test',
  //   address: {
  //     city: 'New Orleans',
  //     state: 'Lousiana',
  //     postalCode: '39870'
  //   }
  // })

  //patchValue() is used  to add value to a few forms controls
  this.registrationForm.patchValue({
    userName:'Mahesh',
    password: 'dateOfBirth',
    confirmPassword: 'dateOfBirth'
  })
 }


}
