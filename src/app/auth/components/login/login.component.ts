import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'inst-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}'),
    ]),
    password: new FormControl('', Validators.required),
  })

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email')
  }
  get password() {
    return this.loginForm.get('password')
  }

  onSubmit() {
    alert(JSON.stringify(this.loginForm.value))
  }
}
