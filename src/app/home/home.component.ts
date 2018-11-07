import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DataApiService } from '../data-api.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    verified = false;

    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor(private messageService: MessageService, private dataApiService: DataApiService) { }

    ngOnInit() {
        this.verified = false;
    }

    forgotPassword() {
    }

    showSuccess() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You may now download APK' });
    }

    showFailure() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Verification failed. Please try again.' });
    }

    clear() {
        this.messageService.clear();
    }

    onSubmit(myForm) {
        //check if form valid

        if (myForm.valid) {
            //check if passwords mismatch

            // console.log("Valid form, sending request");
            this.dataApiService.postVerify(myForm.value.username, myForm.value.password).subscribe(data => {
                this.showSuccess();
                myForm.reset();
                this.verified = true;

            },
                err => {
                    this.showFailure();
                });

        }
        //params not filled up
        else {
            // console.log("form invalid, not sending request");
        }

    }
}
