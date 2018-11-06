import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PanelModule } from 'primeng/panel';

import { ToastModule } from 'primeng/toast';
import { ComponentsModule } from '../components/components.module';

import {Component} from '@angular/core';
import {MessageService} from 'primeng/api';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        AccordionModule,
        ToastModule
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: [MessageService]
})
export class HomeModule { }
