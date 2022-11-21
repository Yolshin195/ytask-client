import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/auth/login/login.component';
import { TaskBrowseComponent } from './component/task/task-browse/task-browse.component';

const routes: Routes = [
  {
    path: "task",
    component: TaskBrowseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
