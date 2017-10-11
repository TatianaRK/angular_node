import {Component} from "@angular/core";

@Component({
    selector: 'contacts',
    templateUrl: 'app/template/contacts.component.html',
    styles: [`
        #contacts {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
        }
        
        #map {
            flex-basis: 50%;
            height: 500px;
        }
        
        #phones {
            flex-basis: 20%;
        }
        
        .contactPhone {
            font-size: 16px;
            font-weight: bold;
            margin-left: 10px;
        }
        
        img {
            margin-bottom: 20px;
        }
    `]
})

export class ContactsComponent {

    lat: number = 53.860198;
    lng: number = 27.481393;
}