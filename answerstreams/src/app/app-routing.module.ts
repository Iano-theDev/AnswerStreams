import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    import('./features/questions/questions/questions.component').then(c => c.QuestionsComponent)
  },
  {
    path: 'questions/:id',
    loadComponent: () =>
    import('./features/questions/single-question/single-question.component').then(c => c.SingleQuestionComponent)
  },
  {
    path: 'ask',
    loadComponent: () =>
    import('./features/questions/ask-question/ask-question.component').then(c => c.AskQuestionComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
