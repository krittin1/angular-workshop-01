import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  firstName = '';
  lastName = '';
  show = true;
  name = '';
  users = []; //Array


  inputYourName(event: any): void {
    this.firstName = event.target.value;
  }

  inputLastName(input: string): void {
    this.lastName = input;
  }

 

  onEnter() : void{ 
    this.name = this.firstName + ' ' + this.lastName;
    // Append to list/arry
    this.users.push(this.name);
}

  ngOnInit(): void {
  }

}
