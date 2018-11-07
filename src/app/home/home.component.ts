import { Component, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { DataApiService } from '../data-api.service';
import { Router, NavigationEnd } from '../../../node_modules/@angular/router';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    verified = false;
    sectionScroll;

    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor(private messageService: MessageService, private dataApiService: DataApiService, private router: Router) { }
    internalRoute(page, dst) {
        this.sectionScroll = dst;
        this.router.navigate([page], { fragment: dst });
    }

    ngOnInit() {
        this.verified = false;
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            this.doScroll();
            this.sectionScroll = null;
        });
    }

    doScroll() {

        if (!this.sectionScroll) {
            return;
        }
        try {
            var elements = document.getElementById(this.sectionScroll);

            elements.scrollIntoView();
        }
        finally {
            this.sectionScroll = null;
        }
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
