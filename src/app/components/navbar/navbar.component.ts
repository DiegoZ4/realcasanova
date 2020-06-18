import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  ngOnInit() {
  }

  logout(){
    console.log("logout");

    localStorage.removeItem('identity');
    localStorage.removeItem('token-real');

    this.userService.identity = null;
    this.userService.token = null;
  }

}
