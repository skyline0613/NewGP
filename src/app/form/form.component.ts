import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public hobbies!: string;
}



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  model = new User();
  hobbies: string[] = [
    'Acrobatics',
    'Acting',
    'Animation',
    'Astronomy',
    'Baking',
  ];
  constructor() {}

  ngOnInit() {


  }


  onSubmit(form: any) {
    console.log(form.value);
  }

}
