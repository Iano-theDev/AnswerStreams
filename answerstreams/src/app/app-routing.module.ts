import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateService } from './core/services/can-activate.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./homepage/homepage.component').then(c => c.HomepageComponent)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'questions',
    loadComponent: () =>
    import('./features/questions/questions/questions.component').then(c => c.QuestionsComponent),
    canActivate: [CanActivateService]
  },
  {
    path: 'questions/:id',
    loadComponent: () => 
    import('./features/questions/single-question/single-question.component').then(c => c.SingleQuestionComponent),
    canActivate: [CanActivateService] 
  },
  {
    path: 'ask',
    loadComponent: () =>
    import('./features/questions/ask-question/ask-question.component').then(c => c.AskQuestionComponent),
    canActivate: [CanActivateService]
  },
  {
    path: 'profile',
    loadComponent: () =>
    import('./features/user-profile/user-profile.component').then(c => c.UserProfileComponent),
    canActivate: [CanActivateService]
  },
  {
    path: 'admin',
    loadComponent: () =>
    import('./features/admin/admin.component').then(c => c.AdminComponent)
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
