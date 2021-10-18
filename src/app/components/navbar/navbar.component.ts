import { Component, OnInit } from '@angular/core';
import {GetCharacters, SearchByFormsFields} from "../../actions/characters.action";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
form: FormGroup;
  genderControl = new FormControl('', Validators.required);
  statusControl = new FormControl('', Validators.required);
  speciesControl = new FormControl('', Validators.required)
  constructor(private router: Router, private store: Store) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
      ]),
      gender: new FormControl(null, [
        Validators.required
      ]),
      status: new FormControl(null, [
        Validators.required
      ]),
      species: new FormControl(null, [
        Validators.required
      ])
    })
  }

  searchByAllFields(event: any){
    event.preventDefault();
    console.log(this.form.value)
    this.store.dispatch(new SearchByFormsFields(this.form.value));
  }
  resetForm(){
    this.form.reset();
    this.store.dispatch(new GetCharacters(1))
  }
}
