import { Component } from '@angular/core';
import { CardComponent } from "../../../shared/card/card.component";
import { InputTextComponent } from "../../../shared/input-text/input-text.component";
import { PasswordComponent } from "../../../shared/password/password.component";
import { ButtonComponent } from "../../../shared/button-component/button-component.component";
import { ApiService } from '../../../services/api/api.service';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CardComponent, InputTextComponent, PasswordComponent, ButtonComponent],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.scss'
})
export class LoginComponent {

constructor(private apiService : ApiService){}


onLogin() {
  if (this.email && this.password) {
    this.apiService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful!', response);
      },
      error: (error) => {
        console.error('Login failed!', error);
        
      }
    });
  } else {
    console.error('Email and password are required');
    
  }
}
password: string ="";
email: string ="";

}
