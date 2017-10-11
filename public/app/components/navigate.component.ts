import {Component, OnInit} from "@angular/core";

@Component({
    selector: '#navigate',
    templateUrl: 'app/template/navigate.component.html',
    styles: [`
        #categories {
            display: flex;
            flex-flow: row wrap;
            width: 100%;
            justify-content: space-between;
        }
        
        #categories div {
            flex-basis: 33%;
            height: 200px;
            text-align: center;
            margin-bottom: 10px;
            background-position: center;
            background-size: cover;
        }

        #categories a {
            text-decoration: none;
            display: inline-block;
            margin-top: 90px;
            font-size: 18px;
            color: #000;
            font-family: SFUIDisplay-Light, Tahoma, Verdanа, Arial;
        }

        #categories a:hover {
            color: #fff;
            font-size: 20px;
        }
        
        #category1 {
            background-image: url("../../images/office.jpg");
        }

        #category2 {
            background-image: url("../../images/room.jpg");
        }

        #category3 {
            background-image: url("../../images/kitchen.jpg");
        }
        
        #category4 {
            background-image: url("../../images/soft.jpg");
        }
        
        #category5 {
            background-image: url("../../images/child.jpg");
        }
        
        #category6 {
            background-image: url("../../images/other.jpg");
        }
    `]
})

export class NavigateComponent {

}