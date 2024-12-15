import { Routes } from '@angular/router';
import { LoginComponent } from './Modules/Auth/login-component/login-component.component';

export const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },

];
