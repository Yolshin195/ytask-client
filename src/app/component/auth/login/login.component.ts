import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService, Credential } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @Input() error: string | null = null;

  hide = true;

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      const credential: Credential = {
        username: this.form.value.username,
        password: this.form.value.password,
        isSave: true
      }
      
      this.auth.authenticate(credential);

      console.log(this.form.value);
      //this.submitEM.emit(this.form.value);
    }
  }

}
