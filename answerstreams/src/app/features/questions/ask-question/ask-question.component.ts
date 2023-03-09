import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";

@Component({
    selector: 'app-ask-question',
    standalone: true,
    templateUrl: './ask-question.component.html',
    styleUrls: ['./ask-question.component.css'],
    imports: [CommonModule, HeaderComponent, FooterComponent]
})
export class AskQuestionComponent {

}
