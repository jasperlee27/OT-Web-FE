import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';

import { DataApiService } from '../data-api.service';
import { saveAs } from '../../../node_modules/file-saver'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();

    constructor(private dataApiService: DataApiService, private http: HttpClient) { }

    ngOnInit() { }

    saveFile() {
        const httpHeader = {
            headers: new HttpHeaders({ 'Accept': 'text/plain' })
        };
        this.http.get('http://178.128.50.224:3000/downloadApp', httpHeader)
            .toPromise()
            .then(response => this.saveToFileSystem(response));
    }

    private saveToFileSystem(response) {
        const contentDispositionHeader: string = response.headers.get('Content-Disposition');
        const parts: string[] = contentDispositionHeader.split(';');
        const filename = parts[1].split('=')[1];
        const blob = new Blob([response._body], { type: 'text/plain' });
        saveAs(blob, filename);
    }

    registerAccount() {
        console.log("clicked register");
        var data = this.dataApiService.getServerHealth();
        console.log(data);
    }

    login() {
        // this.dataApiService.getDownload().subscribe(data => {
        //     console.log("Login reponse " + data);
        // },
        //     err => {
        //         console.log(err);
        //     });
        // console.log("login function completed");

        this.dataApiService.getDownload().subscribe(data => this.downloadFile(data)),//console.log(data),
            error => console.log("Error downloading the file."),
            () => console.info("OK");
    }

    // downloadApp() {
    //     console.log("Clicked download");
    //     return this.http.get<any>("http://178.128.50.224:3000/downloadApp");
    // }

    downloadFile(data: Response) {
        var blob = new Blob([data], { type: 'blob' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    }
}