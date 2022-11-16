import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Credential {
  username: string,
  password: string,
  isSave?: boolean
};

interface AuthenticateResponse {
  token: string
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
    this.http.post<AuthenticateResponse>(this.path, {username: credential.username, password: credential.password})
      .subscribe(auth => {
        this.token = auth.token;
        this.authenticated = true;
        console.log(auth);
      });
  }

}
