import { Component} from '@angular/core';

@Component({
    selector: 'about-app',
    templateUrl: 'app/template/about.component.html',
    styles: [`
        .text {
            font-size: 16px;
        }
        
        #about {
            margin-top: 20px;
        }
    `]
})

export class AboutComponent {
}