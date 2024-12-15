import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;
  constructor(private http: HttpClient) { 
  }
  loadConfig(): Observable<any> {
    return this.http.get('/assets/config.json').pipe(
      map((data: any) => {
        this.config = data; // Store the config data
        return data;
      }),
      catchError(error => {
        console.error('Error loading config.json', error);
        throw error;
      })
    );
  }

  // Getter for the API URL
  get apiUrl(): string {
    if (!this.config) {
      console.error('Config not loaded yet');
      return '';
    }
    return this.config.apiUrl || '';
  }



}
