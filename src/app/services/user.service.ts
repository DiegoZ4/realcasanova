import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public url: string = environment.url;
  identity: any;
  token: any;

  constructor(
    private _http: HttpClient
  ) { }

  signUp(user, gethash = null) {
    
    if(gethash != null){
      user.gethash = gethash
    }

    let json = JSON.stringify(user);
    let params = json;

    let headers = new HttpHeaders( {'Content-Type': 'application/json'})

    return this._http.post(this.url+'/login', params, { headers })

  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if ( identity != 'undefined') {
      this.identity = identity;
    }else{
      this.identity = null
    }

    return this.identity;
  }

  getToken() {
    let token = localStorage.getItem('token-real');

    if ( token != 'undefined') {
      this.token = token;
    }else{
      this.token = null
    }

    return this.token;
  }

  register(user_to_register){

    let params = JSON.stringify(user_to_register);

    let headers = new HttpHeaders( {'Content-Type': 'application/json'})

    return this._http.post(this.url+'/register', params, { headers })

  }
}
