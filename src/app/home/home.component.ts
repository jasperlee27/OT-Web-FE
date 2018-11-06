import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() { }

    forgotPassword(){
        console.log("Forgot password");
    }
}
