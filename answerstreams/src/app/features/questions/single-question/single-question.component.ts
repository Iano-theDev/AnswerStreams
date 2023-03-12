import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { FooterComponent } from "../../../shared/components/footer/footer.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-single-question',
    standalone: true,
    templateUrl: './single-question.component.html',
    styleUrls: ['./single-question.component.css'],
    imports: [CommonModule, HeaderComponent, FontAwesomeModule, FooterComponent]
})
export class SingleQuestionComponent {
  showInput?: boolean;


  faThumbsDown = faThumbsDown;
  faThumbsUp = faThumbsUp;

}
