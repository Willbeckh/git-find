import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  searchForm!: FormGroup;
  username!: string;

  constructor() { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      username: new FormControl(
        null,
        [Validators.required]
      ),
    });

  }

  // method to get the username from the form
  searchUsername(){
    // console.log(this.searchForm.value);
    this.username = this.searchForm.value.username;
    // return this.searchForm.get('username').value;
  } 
}
