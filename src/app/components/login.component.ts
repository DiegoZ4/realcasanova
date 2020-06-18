import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  
  public user: User;
  public userToRegister: User;
  public identity;
  public token;
  public password2: string;
  public errorMessage;
  public alertRegister;
  userRegister: User;

  constructor(
    public userService: UserService
  ) {
    this.user = new User('', '', '', '', '', '', '', '', '', '', '', '', '', null, 'ROLE_USER');
    this.userToRegister = new User('', '', '', '', '', '', '', '', '', '', '', '', '', null, 'ROLE_USER');
  }

  ngOnInit() {
    
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();

    console.log(this.identity);
    console.log(this.token);

  }

  
  onSubmit() {
    console.log(this.user)
    this.userService.signUp(this.user, true)
        .subscribe( (resp: any) => {
          console.log( (resp) );
          this.userService.identity = resp.user;
          this.userService.token = resp.token;

          localStorage.setItem('identity', JSON.stringify(this.userService.identity));
          localStorage.setItem('token-real', JSON.stringify(this.userService.token));
        },
        error => {
          this.errorMessage = error.error.message;

          if(this.errorMessage != null) {
            console.log(error)
          }
        });
  }

  onSubmitRegister(){
    console.log(this.userToRegister);

    this.userService.register( this.userToRegister )
        .subscribe ( (resp: any) => {
          console.log(resp);
          let user = resp.user;

          if(!user._id) {
            this.alertRegister = "Error al registrarse";
          }else{
            this.alertRegister = "Registro correcto! Ya puedes ingresar al Club!";
          }
        },
        error => {
          console.log( error );
          // this.errorMessage = error.error.message;

          // if(this.errorMessage != null) {
          //   console.log(error)
          // }
        });
  }

  

}
