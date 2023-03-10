import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { RegisterComponent } from "./features/auth/register/register.component";
import { LoginComponent } from "./features/auth/login/login.component";
import { QuestionsComponent } from "./features/questions/questions/questions.component";
import { StoreModule } from '@ngrx/store';
import { AskQuestionComponent } from "./features/questions/ask-question/ask-question.component";
import { SingleQuestionComponent } from "./features/questions/single-question/single-question.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderComponent,
        FooterComponent,
        HomepageComponent,
        RegisterComponent,
        LoginComponent,
        QuestionsComponent,
        StoreModule.forRoot({}, {}),
        AskQuestionComponent,
        SingleQuestionComponent
    ]
})
export class AppModule { }
