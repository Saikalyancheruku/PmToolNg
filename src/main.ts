import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ConfigService } from './app/services/Config/config.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { APP_INITIALIZER } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './app/Modules/Auth/login-component/login-component.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
export function initializeApp(configService: ConfigService) {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      configService.loadConfig().subscribe({
        next: (data) => {
          console.log('Config loaded successfully', data);
          resolve(true);
        },
        error: (err) => {
          console.error('Error loading config', err);
          reject(err);
        },
      });
    });
  };
}
// export function initializeApp(configService: ConfigService) {
//   return () => configService.loadConfig().toPromise();
// }



bootstrapApplication(AppComponent, {
  providers: [
    
    ConfigService,
    //HttpClientModule
   provideHttpClient(), 
   provideRouter(routes), // Keep HttpClientModule globally available
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [ConfigService], 
      multi: true,
    },
  ],
});