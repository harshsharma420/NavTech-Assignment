import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  users: any;

  simpleForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+$')])
  });
  constructor(private api: ApiService) {

  }
  ngOnInit() {

  }

  get firstNameValidator() {
    return this.simpleForm.get('firstName');
  }
  get lastNameValidator() {
    return this.simpleForm.get('lastName');
  }
  get emailValidator() {
    return this.simpleForm.get('email');
  }
  get phoneValidator() {
    return this.simpleForm.get('phone');
  }
  OnSubmit() {
    console.log(this.simpleForm.value);
    this.api.addUser(this.simpleForm.value).subscribe(
      {
        next: result => {
          console.log(result);
        }, error: errorMessage => {
          console.log(errorMessage);
        }
      }
    )
  }


}
