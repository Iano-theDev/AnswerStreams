import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import {NgForm ,  FormsModule} from '@angular/forms'


@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    imports: [CommonModule, FooterComponent, HeaderComponent, FormsModule]
    
})
export class LoginComponent {
    form!:NgForm;

    submitForm(form:NgForm){
      console.log(form)
    }


}
