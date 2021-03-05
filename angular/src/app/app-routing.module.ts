import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';


const routes: Routes = [
  { path: '', redirectTo: '/blue', pathMatch: 'full' },
  { path: 'blue', component: TodoComponent },
  { path: 'amber', component: TodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
