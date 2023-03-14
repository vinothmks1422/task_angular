import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'login/signup',
  component: SignupComponent
},
{
  path: 'signup/login',
  component: LoginComponent
},
{
  path: 'home/logout',
  component: LoginComponent
},
{
  path: 'home/logout/signup',
  component: SignupComponent
},
{
  path: '**',
  redirectTo: '/login'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
