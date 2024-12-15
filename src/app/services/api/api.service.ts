import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from '../Config/config.service';
import { ENDPOINTS } from '../../../assets/EndPoints';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient:HttpClient,
    private configService :ConfigService,
    private authService:AuthService
  ) { }
  private get apiUrl(): string {
    return this.configService.apiUrl;  
  }
//apiUrl :String = this.configService.apiUrl();

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}${ENDPOINTS.login}`;
    console.log('Login API URL:', url);
    const payload = { emailAddress: email, password };

    return this.httpClient.post<{ jwtToken: string }>(url, payload).pipe(
      map((response) => {
 
        this.authService.setToken(response.jwtToken);
        return response; 
      })
    );
  }


}
