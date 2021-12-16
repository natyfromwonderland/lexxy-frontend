import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { PupilService } from '../services/pupil.service';

@Component({
  selector: 'app-signup-button',
  templateUrl: './signup-button.component.html',
  styles: [
  ]
})
export class SignupButtonComponent implements OnInit {

  constructor(public auth: AuthService, private pupilService: PupilService) { }

  ngOnInit(): void {
  }
  
  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}
