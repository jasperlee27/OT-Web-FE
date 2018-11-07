import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';
import { ActivatedRoute } from '@angular/router';
import { DataApiService } from '../data-api.service';
import { saveAs } from '../../../node_modules/file-saver'
import { MessageService } from '../../../node_modules/primeng/api';
import { Router } from '../../../node_modules/@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})


export class SignupComponent implements OnInit {
    test: Date = new Date();
    defaultValue;
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    countryList: Array<any>;
    captchaSuccess: boolean = false;
    id: number;
    private sub: any;
    referralCode: String = ""; 
    constructor(private dataApiService: DataApiService, private http: HttpClient, private messageService: MessageService, private router: Router, private route: ActivatedRoute) {
        this.countryList = new Array();
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            var toInput = +params['id'];
            if (this.id){
                this.referralCode = this.id.toString();
            }
            // In a real app: dispatch action to load the details here.
        });



        this.defaultValue = 'AF';
        this.countryList.push(new Country('CN', 'China'));
        // this.countryList.push(new Country('Breakline','---------'));
        this.countryList.push(new Country('AF', 'Afghanistan'));
        this.countryList.push(new Country('AX', 'Åland Islands   '));
        this.countryList.push(new Country('AL', 'Albania '));
        this.countryList.push(new Country('DZ', 'Algeria '));
        this.countryList.push(new Country('AS', 'American Samoa  '));
        this.countryList.push(new Country('AD', 'Andorra '));
        this.countryList.push(new Country('AO', 'Angola  '));
        this.countryList.push(new Country('AI', 'Anguilla    '));
        this.countryList.push(new Country('AQ', 'Antarctica  '));
        this.countryList.push(new Country('AG', 'Antigua and Barbuda '));
        this.countryList.push(new Country('AR', 'Argentina   '));
        this.countryList.push(new Country('AM', 'Armenia '));
        this.countryList.push(new Country('AW', 'Aruba   '));
        this.countryList.push(new Country('AU', 'Australia   '));
        this.countryList.push(new Country('AT', 'Austria '));
        this.countryList.push(new Country('AZ', 'Azerbaijan  '));
        this.countryList.push(new Country('BH', 'Bahrain '));
        this.countryList.push(new Country('BS', 'Bahamas '));
        this.countryList.push(new Country('BD', 'Bangladesh  '));
        this.countryList.push(new Country('BB', 'Barbados    '));
        this.countryList.push(new Country('BY', 'Belarus '));
        this.countryList.push(new Country('BE', 'Belgium '));
        this.countryList.push(new Country('BZ', 'Belize  '));
        this.countryList.push(new Country('BJ', 'Benin   '));
        this.countryList.push(new Country('BM', 'Bermuda '));
        this.countryList.push(new Country('BT', 'Bhutan  '));
        this.countryList.push(new Country('BO', 'Bolivia, Plurinational State of '));
        this.countryList.push(new Country('BQ', 'Bonaire, Sint Eustatius and Saba    '));
        this.countryList.push(new Country('BA', 'Bosnia and Herzegovina  '));
        this.countryList.push(new Country('BW', 'Botswana    '));
        this.countryList.push(new Country('BV', 'Bouvet Island   '));
        this.countryList.push(new Country('BR', 'Brazil  '));
        this.countryList.push(new Country('IO', 'British Indian Ocean Territory  '));
        this.countryList.push(new Country('BN', 'Brunei Darussalam   '));
        this.countryList.push(new Country('BG', 'Bulgaria    '));
        this.countryList.push(new Country('BF', 'Burkina Faso    '));
        this.countryList.push(new Country('BI', 'Burundi '));
        this.countryList.push(new Country('KH', 'Cambodia    '));
        this.countryList.push(new Country('CM', 'Cameroon    '));
        this.countryList.push(new Country('CA', 'Canada  '));
        this.countryList.push(new Country('CV', 'Cape Verde  '));
        this.countryList.push(new Country('KY', 'Cayman Islands  '));
        this.countryList.push(new Country('CF', 'Central African Republic    '));
        this.countryList.push(new Country('TD', 'Chad    '));
        this.countryList.push(new Country('CL', 'Chile   '));
        this.countryList.push(new Country('CX', 'Christmas Island    '));
        this.countryList.push(new Country('CC', 'Cocos (Keeling) Islands '));
        this.countryList.push(new Country('CO', 'Colombia    '));
        this.countryList.push(new Country('KM', 'Comoros '));
        this.countryList.push(new Country('CG', 'Congo   '));
        this.countryList.push(new Country('CD', 'Congo, the Democratic Republic of the   '));
        this.countryList.push(new Country('CK', 'Cook Islands    '));
        this.countryList.push(new Country('CR', 'Costa Rica  '));
        this.countryList.push(new Country('CI', 'Côte d\'Ivoire   '));
        this.countryList.push(new Country('HR', 'Croatia '));
        this.countryList.push(new Country('CU', 'Cuba    '));
        this.countryList.push(new Country('CW', 'Curaçao '));
        this.countryList.push(new Country('CY', 'Cyprus  '));
        this.countryList.push(new Country('CZ', 'Czech Republic  '));
        this.countryList.push(new Country('DK', 'Denmark '));
        this.countryList.push(new Country('DJ', 'Djibouti    '));
        this.countryList.push(new Country('DM', 'Dominica    '));
        this.countryList.push(new Country('DO', 'Dominican Republic  '));
        this.countryList.push(new Country('EC', 'Ecuador '));
        this.countryList.push(new Country('EG', 'Egypt   '));
        this.countryList.push(new Country('SV', 'El Salvador '));
        this.countryList.push(new Country('GQ', 'Equatorial Guinea   '));
        this.countryList.push(new Country('ER', 'Eritrea '));
        this.countryList.push(new Country('EE', 'Estonia '));
        this.countryList.push(new Country('ET', 'Ethiopia    '));
        this.countryList.push(new Country('FK', 'Falkland Islands (Malvinas) '));
        this.countryList.push(new Country('FO', 'Faroe Islands   '));
        this.countryList.push(new Country('FJ', 'Fiji    '));
        this.countryList.push(new Country('FI', 'Finland '));
        this.countryList.push(new Country('FR', 'France  '));
        this.countryList.push(new Country('GF', 'French Guiana   '));
        this.countryList.push(new Country('PF', 'French Polynesia    '));
        this.countryList.push(new Country('TF', 'French Southern Territories '));
        this.countryList.push(new Country('GA', 'Gabon   '));
        this.countryList.push(new Country('GM', 'Gambia  '));
        this.countryList.push(new Country('GE', 'Georgia '));
        this.countryList.push(new Country('DE', 'Germany '));
        this.countryList.push(new Country('GH', 'Ghana   '));
        this.countryList.push(new Country('GI', 'Gibraltar   '));
        this.countryList.push(new Country('GR', 'Greece  '));
        this.countryList.push(new Country('GL', 'Greenland   '));
        this.countryList.push(new Country('GD', 'Grenada '));
        this.countryList.push(new Country('GP', 'Guadeloupe  '));
        this.countryList.push(new Country('GU', 'Guam    '));
        this.countryList.push(new Country('GT', 'Guatemala   '));
        this.countryList.push(new Country('GG', 'Guernsey    '));
        this.countryList.push(new Country('GN', 'Guinea  '));
        this.countryList.push(new Country('GW', 'Guinea-Bissau   '));
        this.countryList.push(new Country('GY', 'Guyana  '));
        this.countryList.push(new Country('HT', 'Haiti   '));
        this.countryList.push(new Country('HM', 'Heard Island and McDonald Islands   '));
        this.countryList.push(new Country('VA', 'Holy See (Vatican City State)   '));
        this.countryList.push(new Country('HN', 'Honduras    '));
        this.countryList.push(new Country('HK', 'Hong Kong   '));
        this.countryList.push(new Country('HU', 'Hungary '));
        this.countryList.push(new Country('IS', 'Iceland '));
        this.countryList.push(new Country('IN', 'India   '));
        this.countryList.push(new Country('ID', 'Indonesia   '));
        this.countryList.push(new Country('IR', 'Iran, Islamic Republic of   '));
        this.countryList.push(new Country('IQ', 'Iraq    '));
        this.countryList.push(new Country('IE', 'Ireland '));
        this.countryList.push(new Country('IM', 'Isle of Man '));
        this.countryList.push(new Country('IL', 'Israel  '));
        this.countryList.push(new Country('IT', 'Italy   '));
        this.countryList.push(new Country('JM', 'Jamaica '));
        this.countryList.push(new Country('JP', 'Japan   '));
        this.countryList.push(new Country('JE', 'Jersey  '));
        this.countryList.push(new Country('JO', 'Jordan  '));
        this.countryList.push(new Country('KZ', 'Kazakhstan  '));
        this.countryList.push(new Country('KE', 'Kenya   '));
        this.countryList.push(new Country('KI', 'Kiribati    '));
        this.countryList.push(new Country('KP', 'Korea, Democratic People\'s Republic of'));
        this.countryList.push(new Country('KR', 'Korea, Republic of  '));
        this.countryList.push(new Country('KW', 'Kuwait  '));
        this.countryList.push(new Country('KG', 'Kyrgyzstan  '));
        this.countryList.push(new Country('LA', 'Lao People\'s Democratic Republic'));
        this.countryList.push(new Country('LV', 'Latvia'));
        this.countryList.push(new Country('LB', 'Lebanon'));
        this.countryList.push(new Country('LS', 'Lesotho'));
        this.countryList.push(new Country('LR', 'Liberia'));
        this.countryList.push(new Country('LY', 'Libya'));
        this.countryList.push(new Country('LI', 'Liechtenstein'));
        this.countryList.push(new Country('LT', 'Lithuania'));
        this.countryList.push(new Country('LU', 'Luxembourg'));
        this.countryList.push(new Country('MO', 'Macao'));
        this.countryList.push(new Country('MK', 'Macedonia, the Former Yugoslav Republic of'));
        this.countryList.push(new Country('MG', 'Madagascar  '));
        this.countryList.push(new Country('MW', 'Malawi  '));
        this.countryList.push(new Country('MY', 'Malaysia    '));
        this.countryList.push(new Country('MV', 'Maldives    '));
        this.countryList.push(new Country('ML', 'Mali    '));
        this.countryList.push(new Country('MT', 'Malta   '));
        this.countryList.push(new Country('MH', 'Marshall Islands    '));
        this.countryList.push(new Country('MQ', 'Martinique  '));
        this.countryList.push(new Country('MR', 'Mauritania  '));
        this.countryList.push(new Country('MU', 'Mauritius   '));
        this.countryList.push(new Country('YT', 'Mayotte '));
        this.countryList.push(new Country('MX', 'Mexico  '));
        this.countryList.push(new Country('FM', 'Micronesia, Federated States of '));
        this.countryList.push(new Country('MD', 'Moldova, Republic of    '));
        this.countryList.push(new Country('MC', 'Monaco  '));
        this.countryList.push(new Country('MN', 'Mongolia    '));
        this.countryList.push(new Country('ME', 'Montenegro  '));
        this.countryList.push(new Country('MS', 'Montserrat  '));
        this.countryList.push(new Country('MA', 'Morocco '));
        this.countryList.push(new Country('MZ', 'Mozambique  '));
        this.countryList.push(new Country('MM', 'Myanmar '));
        this.countryList.push(new Country('NA', 'Namibia '));
        this.countryList.push(new Country('NR', 'Nauru   '));
        this.countryList.push(new Country('NP', 'Nepal   '));
        this.countryList.push(new Country('NL', 'Netherlands '));
        this.countryList.push(new Country('NC', 'New Caledonia   '));
        this.countryList.push(new Country('NZ', 'New Zealand '));
        this.countryList.push(new Country('NI', 'Nicaragua   '));
        this.countryList.push(new Country('NE', 'Niger   '));
        this.countryList.push(new Country('NG', 'Nigeria '));
        this.countryList.push(new Country('NU', 'Niue    '));
        this.countryList.push(new Country('NF', 'Norfolk Island  '));
        this.countryList.push(new Country('MP', 'Northern Mariana Islands    '));
        this.countryList.push(new Country('NO', 'Norway  '));
        this.countryList.push(new Country('OM', 'Oman    '));
        this.countryList.push(new Country('PK', 'Pakistan    '));
        this.countryList.push(new Country('PW', 'Palau   '));
        this.countryList.push(new Country('PS', 'Palestine, State of '));
        this.countryList.push(new Country('PA', 'Panama  '));
        this.countryList.push(new Country('PG', 'Papua New Guinea    '));
        this.countryList.push(new Country('PY', 'Paraguay    '));
        this.countryList.push(new Country('PE', 'Peru    '));
        this.countryList.push(new Country('PH', 'Philippines '));
        this.countryList.push(new Country('PN', 'Pitcairn    '));
        this.countryList.push(new Country('PL', 'Poland  '));
        this.countryList.push(new Country('PT', 'Portugal    '));
        this.countryList.push(new Country('PR', 'Puerto Rico '));
        this.countryList.push(new Country('QA', 'Qatar   '));
        this.countryList.push(new Country('RE', 'Réunion '));
        this.countryList.push(new Country('RO', 'Romania '));
        this.countryList.push(new Country('RU', 'Russian Federation  '));
        this.countryList.push(new Country('RW', 'Rwanda  '));
        this.countryList.push(new Country('BL', 'Saint Barthélemy    '));
        this.countryList.push(new Country('SH', 'Saint Helena, Ascension and Tristan da Cunha    '));
        this.countryList.push(new Country('KN', 'Saint Kitts and Nevis   '));
        this.countryList.push(new Country('LC', 'Saint Lucia '));
        this.countryList.push(new Country('MF', 'Saint Martin (French part)  '));
        this.countryList.push(new Country('PM', 'Saint Pierre and Miquelon   '));
        this.countryList.push(new Country('VC', 'Saint Vincent and the Grenadines    '));
        this.countryList.push(new Country('WS', 'Samoa   '));
        this.countryList.push(new Country('SM', 'San Marino  '));
        this.countryList.push(new Country('ST', 'Sao Tome and Principe   '));
        this.countryList.push(new Country('SA', 'Saudi Arabia    '));
        this.countryList.push(new Country('SN', 'Senegal '));
        this.countryList.push(new Country('RS', 'Serbia  '));
        this.countryList.push(new Country('SC', 'Seychelles  '));
        this.countryList.push(new Country('SL', 'Sierra Leone    '));
        this.countryList.push(new Country('SG', 'Singapore   '));
        this.countryList.push(new Country('SX', 'Sint Maarten (Dutch part)   '));
        this.countryList.push(new Country('SK', 'Slovakia    '));
        this.countryList.push(new Country('SI', 'Slovenia    '));
        this.countryList.push(new Country('SB', 'Solomon Islands '));
        this.countryList.push(new Country('SO', 'Somalia '));
        this.countryList.push(new Country('ZA', 'South Africa    '));
        this.countryList.push(new Country('GS', 'South Georgia and the South Sandwich Islands    '));
        this.countryList.push(new Country('SS', 'South Sudan '));
        this.countryList.push(new Country('ES', 'Spain   '));
        this.countryList.push(new Country('LK', 'Sri Lanka   '));
        this.countryList.push(new Country('SD', 'Sudan   '));
        this.countryList.push(new Country('SR', 'Suriname    '));
        this.countryList.push(new Country('SJ', 'Svalbard and Jan Mayen  '));
        this.countryList.push(new Country('SZ', 'Swaziland   '));
        this.countryList.push(new Country('SE', 'Sweden  '));
        this.countryList.push(new Country('CH', 'Switzerland '));
        this.countryList.push(new Country('SY', 'Syrian Arab Republic    '));
        this.countryList.push(new Country('TW', 'Taiwan, Province of China   '));
        this.countryList.push(new Country('TJ', 'Tajikistan  '));
        this.countryList.push(new Country('TZ', 'Tanzania, United Republic of    '));
        this.countryList.push(new Country('TH', 'Thailand    '));
        this.countryList.push(new Country('TL', 'Timor-Leste '));
        this.countryList.push(new Country('TG', 'Togo    '));
        this.countryList.push(new Country('TK', 'Tokelau '));
        this.countryList.push(new Country('TO', 'Tonga   '));
        this.countryList.push(new Country('TT', 'Trinidad and Tobago '));
        this.countryList.push(new Country('TN', 'Tunisia '));
        this.countryList.push(new Country('TR', 'Turkey  '));
        this.countryList.push(new Country('TM', 'Turkmenistan    '));
        this.countryList.push(new Country('TC', 'Turks and Caicos Islands    '));
        this.countryList.push(new Country('TV', 'Tuvalu  '));
        this.countryList.push(new Country('UG', 'Uganda  '));
        this.countryList.push(new Country('UA', 'Ukraine '));
        this.countryList.push(new Country('AE', 'United Arab Emirates    '));
        this.countryList.push(new Country('GB', 'United Kingdom  '));
        this.countryList.push(new Country('US', 'United States   '));
        this.countryList.push(new Country('UM', 'United States Minor Outlying Islands    '));
        this.countryList.push(new Country('UY', 'Uruguay '));
        this.countryList.push(new Country('UZ', 'Uzbekistan  '));
        this.countryList.push(new Country('VU', 'Vanuatu '));
        this.countryList.push(new Country('VE', 'Venezuela, Bolivarian Republic of   '));
        this.countryList.push(new Country('VN', 'Viet Nam    '));
        this.countryList.push(new Country('VG', 'Virgin Islands, British '));
        this.countryList.push(new Country('VI', 'Virgin Islands, U.S.    '));
        this.countryList.push(new Country('WF', 'Wallis and Futuna   '));
        this.countryList.push(new Country('EH', 'Western Sahara  '));
        this.countryList.push(new Country('YE', 'Yemen   '));

    }

    // saveFile() {
    //     const httpHeader = {
    //         headers: new HttpHeaders({ 'Accept': 'text/plain' })
    //     };
    //     this.http.get('http://178.128.50.224:3000/downloadApp', httpHeader)
    //         .toPromise()
    //         .then(response => this.saveToFileSystem(response));
    // }

    private saveToFileSystem(response) {
        const contentDispositionHeader: string = response.headers.get('Content-Disposition');
        const parts: string[] = contentDispositionHeader.split(';');
        const filename = parts[1].split('=')[1];
        const blob = new Blob([response._body], { type: 'text/plain' });
        saveAs(blob, filename);
    }

    registerAccount() {
        var data = this.dataApiService.getServerHealth();
    }

    onSubmit(myForm) {
        //check if form valid
        if (myForm.valid) {
            //check if passwords mismatch
            if (myForm.value.password !== myForm.value.password2) {
                this.passwordMismatch();
            }
            //passwords match
            else {
                this.dataApiService.postRegistration(myForm.value.username, myForm.value.password, myForm.value.email, myForm.value.countrySel, myForm.value.referralCode).subscribe(data => {
                    this.addSingle();
                    myForm.reset();
                    setTimeout(() => {
                        this.router.navigate(['home']);
                    },
                        2000);
                },
                    err => {
                        // console.log("Error: " + err.error.message);
                    });
            }
        }
        //params not filled up
        else {
            this.emptyFields();
        }

    }

    // login() {
    //     // this.dataApiService.getDownload().subscribe(data => {
    //     //     console.log("Login reponse " + data);
    //     // },
    //     //     err => {
    //     //         console.log(err);
    //     //     });
    //     // console.log("login function completed");

    //     this.dataApiService.getDownload().subscribe(data => this.downloadFile(data)),//console.log(data),
    //         error => console.log("Error downloading the file."),
    //         () => console.info("OK");
    // }


    addSingle() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Your account has been created. Bringing you to home page to download' });
    }

    passwordMismatch() {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match' });
    }

    emptyFields() {
        this.messageService.add({ severity: 'warning', summary: 'Warn', detail: 'Please fill up all required forms.' });
    }

    addMultiple() {
        this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
        { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
    }

    clear() {
        this.messageService.clear();
    }

    onChange(countryValue) {
        if (countryValue === 'Breakline') {
            countryValue = 'CN';
        }
        // console.log(countryValue);
    }

    downloadFile(data: Response) {
        var blob = new Blob([data], { type: 'blob' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    }
    handleCorrectCaptcha($event) {
        let token = this.captcha.getResponse();
        // this.captcha.reset();
        if (token !== null) {
            this.captchaSuccess = true;
        }
    }
}

export class Country {
    id: String;
    name: String;

    constructor(id: String, name: String) {
        this.id = id;
        this.name = name;
    }

}