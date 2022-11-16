import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Credential {
  username: string,
  password: string,
  isSave?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private path: string = '/api/v1/user/signin';
  authenticated: boolean = false;
  token?: string;

  constructor(private http: HttpClient) { }

  authenticate(credential: Credential): void {
    this.http.post<string>(this.path, {username: credential.username, password: credential.password})
      .subscribe(token => {
        this.token = token;
        this.authenticated = true;
        console.log(token);
      });
  }


}
