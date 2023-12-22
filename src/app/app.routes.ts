import { Routes } from '@angular/router';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { SsoLoginComponent } from './MyComponents/ssoLogin/sso-login.component';

export const routes: Routes = [
  { path: 'todo', component: TodosComponent, data:{requiresLogin: true}} ,
  { path: 'dashboard', component: DashboardComponent, data:{requiresLogin: true}},
  { path: 'sso-login', component: SsoLoginComponent, data:{requiresLogin: true}},
];
