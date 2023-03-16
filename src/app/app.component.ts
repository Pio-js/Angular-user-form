import { Component } from '@angular/core';

interface user {
  username: string,
  email: string,
  address: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fullName!:string;
  email!:string;
  address!:string;

  userArray: user[] = [];

  addNew() {
    this.userArray.push({
      username: this.fullName,
      email: this.email,
      address: this.address
    });
  }

  deleteUser(index: number) {
    this.userArray.splice(index, 1);
  }
}
