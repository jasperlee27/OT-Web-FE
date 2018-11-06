import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
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
    constructor(private messageService: MessageService) { }

    ngOnInit() { 
    }

    forgotPassword() {
        console.log("Forgot password");
    }

    addSingle() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your account has been created' });
    }

    addMultiple() {
        this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
        { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
    }

    clear() {
        this.messageService.clear();
    }

    testToast(){
        this.addSingle();
    }
}
