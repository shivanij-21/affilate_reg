import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './sevices/users.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'affilate';

  siteName = environment.siteName;
  selectedCountry = "+91";
  selectedName = "India";
  phoneSubmitted: boolean = false;
  submitted: boolean = false;
  domain = environment.origin;
  origin = environment.origin
  referralcode: any = 0;
  userRegForm!: FormGroup;
  Allowedcaptcha: boolean = true;
  isClient: boolean = false;
  isprepaidOpen: boolean = false;
  isPremiumSite = environment.isPremiumSite;
  fullsharechkbx: boolean = false;

  userRegDefaultValues = {};
  b2creposnse: any = [];
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private toastr: ToastrService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.initUserRegForm();
    this.userRegDefaultValues = this.userRegForm.value;

    this.route.queryParams.subscribe(params => {
      this.referralcode = params?.['referal_code'];
      console.log(this.referralcode)
      if (this.referralcode) {
        localStorage.removeItem('agreferral_code');
        localStorage.setItem('agreferral_code', this.referralcode);
        this.userRegForm.get('referredBy')?.setValue(this.referralcode);
      } else {
        const storedReferralCode = localStorage.getItem('agreferral_code');
        if (storedReferralCode) {
          this.userRegForm.get('referredBy')?.setValue(storedReferralCode);
        }
      }
    });

  }

  initUserRegForm() {

    this.userRegForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      con_password: ['', Validators.required],
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      referredBy: [0],
    });

  }


  get pf() {
    return this.userRegForm?.controls;
  }

  private currentId = 1000000151;
  private upperLimit = 1001000070;
  private generatedIds: string[] = [];
  generateUniqueB2cID(): void {
    this.usersService.getAllB2cIDs().subscribe((data: any) => {
      const existingIds = data.result.map((item: any) => item.b2cID);

      let newId: string | null = null;

      while (!newId || existingIds.includes(newId)) {
        if (this.currentId > this.upperLimit) {
          console.error('No more IDs available within the specified range.');
          return;
        }
        newId = this.currentId.toString();
        this.currentId++;
      }

      this.userRegForm.get('b2cID')?.setValue(newId);
      this.generatedIds.push(newId);
    });
  }
  register() {
    if (this.userRegForm.invalid) {
      // this.showTostererror('Please fill all required fields!');
      this.toastr.error('Please fill all required fields!');
      return;
    }
    this.usersService.getAllB2cIDs().subscribe((data1: any) => {
      const existingIds = data1.result.map((item: any) => item.b2cID);

      let newId: string | null = null;

      while (!newId || existingIds.includes(newId)) {
        if (this.currentId > this.upperLimit) {
          console.error('No more IDs available within the specified range.');
          return;
        }
        newId = this.currentId.toString();
        this.currentId++;
      }

      this.userRegForm.get('b2cID')?.setValue(newId);
      this.generatedIds.push(newId);

      const inputReferralCode = this.userRegForm.value.referredBy;
      const storedReferralCode = localStorage.getItem('agreferral_code');
      const referralCodeToSend = (inputReferralCode && inputReferralCode.trim() !== '')
        ? inputReferralCode
        : (storedReferralCode && storedReferralCode.trim() !== ''
          ? storedReferralCode
          : 0);

      let adminUserName = '';
      if (this.siteName === 'babu365') {
        adminUserName = 'babu365USD';
      } else if (this.siteName === 'cxwelcome') {
        adminUserName = 'cxwelcomeUSD';
      }
      let data = {
        referredBy: referralCodeToSend,
        adminUserName: adminUserName,
        userName: this.userRegForm.value.userName,
        password: this.userRegForm.value.password,
        con_password: this.userRegForm.value.con_password,
        fullName: this.userRegForm.value.fullName,
        userType: 0,
        domain: this.origin,
        prepaid: 0,
        lcbd: 0,
        lcbd1: 0,
        lcbd2: 0,
        isb2c: 1,
        b2cID: newId,  // Use the generated B2C ID
        b2cCom: 0,
        newCom: 0,
        commission: null,
        exposureLimit: null,
        phoneNumber: this.selectedCountry + this.userRegForm.value.phoneNumber,
        email: this.userRegForm.value.email,
        adminRefCom: 40,
        agentRefCom: 10
      }

      console.log(data, "data");

      this.usersService.register(data).subscribe((res: any) => {
        // console.log(res);
        if (res.errorCode == 0) {
          // this.showToster("Registered successfully")
          this.toastr.success('Registered successfully');
          let body = {
            "b2cID": newId,
            "domain": this.origin,
            "username": this.userRegForm.value.userName
          };


          setTimeout(() => {
            this.usersService.postB2cID(body).subscribe((response: any) => {
              console.log(response);
              this.b2creposnse = res.result[0]
            });
          }, 2000);
          localStorage.removeItem('agreferral_code');
          this.userRegForm.reset();
          this.userRegForm.get('referredBy')?.setValue(0);
          console.log(this.b2creposnse)
          if (this.b2creposnse.message = 'B2C ID successfully created') {
            const fullUrl = `https://ag.${this.origin}/affilate`;
            window.location.href = fullUrl;
          }

        }
        else {
          // this.showTostererror(res.errorDescription);
          this.toastr.error(res.errorDescription);
        }
      });
    });
  }


  visiblePassword = false;
  showPassword() {
    this.visiblePassword = !this.visiblePassword;
  }

  visibleconfirm = false;
  showconfirm() {
    this.visibleconfirm = !this.visibleconfirm;
  }

  visiblesidebar: boolean = false;
  showsidebar() {
    this.visiblesidebar = !this.visiblesidebar;
  }

  blocktoster: boolean = false;
  blocktostererror: boolean = false
  tosterMessage: string = '';
  tosterMessageerror: string = ''
  closeToster() {
    this.blocktoster = false;
    this.blocktostererror = false
  }
  showTostererror(message: string) {
    this.tosterMessageerror = message;
    this.blocktostererror = true;
    setTimeout(() => {
      this.closeToster();
    }, 2000); // Hide after 2 seconds
  }

  showToster(message: string) {
    this.tosterMessage = message;
    this.blocktoster = true;
    setTimeout(() => {
      this.closeToster();
    }, 2000); // Hide after 2 seconds
  }

  daywises = 'slide-up-leave slide-up-leave-active';

  filteredCountries: any[] = [];
  Countries = [
    { "country": "Bangladesh", "code": "880", "iso": "BD" },
    { "country": "India", "code": "91", "iso": "IN" },
    { "country": "United Arab Emirates", "code": "971", "iso": "AE" },

    { "country": "United Kingdom", "code": "44", "iso": "GB" },

    { "country": "United States", "code": "1", "iso": "US" },

    { "country": "Israel", "code": "972", "iso": "IL" },

    { "country": "Afghanistan", "code": "93", "iso": "AF" },

    { "country": "Albania", "code": "355", "iso": "AL" },

    { "country": "Algeria", "code": "213", "iso": "DZ" },

    { "country": "AmericanSamoa", "code": "1 684", "iso": "AS" },
    { "country": "Andorra", "code": "376", "iso": "AD" },
    {
      "country": "Anguilla",
      "code": "1 264",
      "iso": "AI"
    },
    {
      "country": "Antigua and Barbuda",
      "code": "1268",
      "iso": "AG"
    },
    {
      "country": "Argentina",
      "code": "54",
      "iso": "AR"
    },
    {
      "country": "Armenia",
      "code": "374",
      "iso": "AM"
    },
    {
      "country": "Aruba",
      "code": "297",
      "iso": "AW"
    },
    {
      "country": "Australia",
      "code": "61",
      "iso": "AU"
    },
    {
      "country": "Austria",
      "code": "43",
      "iso": "AT"
    },
    {
      "country": "Azerbaijan",
      "code": "994",
      "iso": "AZ"
    },
    {
      "country": "Bahamas",
      "code": "1 242",
      "iso": "BS"
    },
    {
      "country": "Bahrain",
      "code": "973",
      "iso": "BH"
    },
    {
      "country": "Barbados",
      "code": "1 246",
      "iso": "BB"
    },
    {
      "country": "Belarus",
      "code": "375",
      "iso": "BY"
    },
    {
      "country": "Belgium",
      "code": "32",
      "iso": "BE"
    },
    {
      "country": "Belize",
      "code": "501",
      "iso": "BZ"
    },
    {
      "country": "Benin",
      "code": "229",
      "iso": "BJ"
    },
    {
      "country": "Bermuda",
      "code": "1 441",
      "iso": "BM"
    },
    {
      "country": "Bhutan",
      "code": "975",
      "iso": "BT"
    },
    {
      "country": "Bosnia and Herzegovina",
      "code": "387",
      "iso": "BA"
    },
    {
      "country": "Botswana",
      "code": "267",
      "iso": "BW"
    },
    {
      "country": "Brazil",
      "code": "55",
      "iso": "BR"
    },
    {
      "country": "British Indian Ocean Territory",
      "code": "246",
      "iso": "IO"
    },
    {
      "country": "Bulgaria",
      "code": "359",
      "iso": "BG"
    },
    {
      "country": "Burkina Faso",
      "code": "226",
      "iso": "BF"
    },
    {
      "country": "Burundi",
      "code": "257",
      "iso": "BI"
    },
    {
      "country": "Cambodia",
      "code": "855",
      "iso": "KH"
    },
    {
      "country": "Cameroon",
      "code": "237",
      "iso": "CM"
    },
    {
      "country": "Canada",
      "code": "1",
      "iso": "CA"
    },
    {
      "country": "Cape Verde",
      "code": "238",
      "iso": "CV"
    },
    {
      "country": "Cayman Islands",
      "code": " 345",
      "iso": "KY"
    },
    {
      "country": "Central African Republic",
      "code": "236",
      "iso": "CF"
    },
    {
      "country": "Chad",
      "code": "235",
      "iso": "TD"
    },
    {
      "country": "Chile",
      "code": "56",
      "iso": "CL"
    },
    {
      "country": "China",
      "code": "86",
      "iso": "CN"
    },
    {
      "country": "Christmas Island",
      "code": "61",
      "iso": "CX"
    },
    {
      "country": "Colombia",
      "code": "57",
      "iso": "CO"
    },
    {
      "country": "Comoros",
      "code": "269",
      "iso": "KM"
    },
    {
      "country": "Congo",
      "code": "242",
      "iso": "CG"
    },
    {
      "country": "Cook Islands",
      "code": "682",
      "iso": "CK"
    },
    {
      "country": "Costa Rica",
      "code": "506",
      "iso": "CR"
    },
    {
      "country": "Croatia",
      "code": "385",
      "iso": "HR"
    },
    {
      "country": "Cuba",
      "code": "53",
      "iso": "CU"
    },
    {
      "country": "Cyprus",
      "code": "357",
      "iso": "CY"
    },
    {
      "country": "Czech Republic",
      "code": "420",
      "iso": "CZ"
    },
    {
      "country": "Denmark",
      "code": "45",
      "iso": "DK"
    },
    {
      "country": "Djibouti",
      "code": "253",
      "iso": "DJ"
    },
    {
      "country": "Dominica",
      "code": "1 767",
      "iso": "DM"
    },
    {
      "country": "Dominican Republic",
      "code": "1 849",
      "iso": "DO"
    },
    {
      "country": "Ecuador",
      "code": "593",
      "iso": "EC"
    },
    {
      "country": "Egypt",
      "code": "20",
      "iso": "EG"
    },
    {
      "country": "El Salvador",
      "code": "503",
      "iso": "SV"
    },
    {
      "country": "Equatorial Guinea",
      "code": "240",
      "iso": "GQ"
    },
    {
      "country": "Eritrea",
      "code": "291",
      "iso": "ER"
    },
    {
      "country": "Estonia",
      "code": "372",
      "iso": "EE"
    },
    {
      "country": "Ethiopia",
      "code": "251",
      "iso": "ET"
    },
    {
      "country": "Faroe Islands",
      "code": "298",
      "iso": "FO"
    },
    {
      "country": "Fiji",
      "code": "679",
      "iso": "FJ"
    },
    {
      "country": "Finland",
      "code": "358",
      "iso": "FI"
    },
    {
      "country": "France",
      "code": "33",
      "iso": "FR"
    },
    {
      "country": "French Guiana",
      "code": "594",
      "iso": "GF"
    },
    {
      "country": "French Polynesia",
      "code": "689",
      "iso": "PF"
    },
    {
      "country": "Gabon",
      "code": "241",
      "iso": "GA"
    },
    {
      "country": "Gambia",
      "code": "220",
      "iso": "GM"
    },
    {
      "country": "Georgia",
      "code": "995",
      "iso": "GE"
    },
    {
      "country": "Germany",
      "code": "49",
      "iso": "DE"
    },
    {
      "country": "Ghana",
      "code": "233",
      "iso": "GH"
    },
    {
      "country": "Gibraltar",
      "code": "350",
      "iso": "GI"
    },
    {
      "country": "Greece",
      "code": "30",
      "iso": "GR"
    },
    {
      "country": "Greenland",
      "code": "299",
      "iso": "GL"
    },
    {
      "country": "Grenada",
      "code": "1 473",
      "iso": "GD"
    },
    {
      "country": "Guadeloupe",
      "code": "590",
      "iso": "GP"
    },
    {
      "country": "Guam",
      "code": "1 671",
      "iso": "GU"
    },
    {
      "country": "Guatemala",
      "code": "502",
      "iso": "GT"
    },
    {
      "country": "Guinea",
      "code": "224",
      "iso": "GN"
    },
    {
      "country": "Guinea-Bissau",
      "code": "245",
      "iso": "GW"
    },
    {
      "country": "Guyana",
      "code": "595",
      "iso": "GY"
    },
    {
      "country": "Haiti",
      "code": "509",
      "iso": "HT"
    },
    {
      "country": "Honduras",
      "code": "504",
      "iso": "HN"
    },
    {
      "country": "Hungary",
      "code": "36",
      "iso": "HU"
    },
    {
      "country": "Iceland",
      "code": "354",
      "iso": "IS"
    },
    {
      "country": "Indonesia",
      "code": "62",
      "iso": "ID"
    },
    {
      "country": "Iraq",
      "code": "964",
      "iso": "IQ"
    },
    {
      "country": "Ireland",
      "code": "353",
      "iso": "IE"
    },
    {
      "country": "Israel",
      "code": "972",
      "iso": "IL"
    },
    {
      "country": "Italy",
      "code": "39",
      "iso": "IT"
    },
    {
      "country": "Jamaica",
      "code": "1 876",
      "iso": "JM"
    },
    {
      "country": "Japan",
      "code": "81",
      "iso": "JP"
    },
    {
      "country": "Jordan",
      "code": "962",
      "iso": "JO"
    },
    {
      "country": "Kazakhstan",
      "code": "7 7",
      "iso": "KZ"
    },
    {
      "country": "Kenya",
      "code": "254",
      "iso": "KE"
    },
    {
      "country": "Kiribati",
      "code": "686",
      "iso": "KI"
    },
    {
      "country": "Kuwait",
      "code": "965",
      "iso": "KW"
    },
    {
      "country": "Kyrgyzstan",
      "code": "996",
      "iso": "KG"
    },
    {
      "country": "Latvia",
      "code": "371",
      "iso": "LV"
    },
    {
      "country": "Lebanon",
      "code": "961",
      "iso": "LB"
    },
    {
      "country": "Lesotho",
      "code": "266",
      "iso": "LS"
    },
    {
      "country": "Liberia",
      "code": "231",
      "iso": "LR"
    },
    {
      "country": "Liechtenstein",
      "code": "423",
      "iso": "LI"
    },
    {
      "country": "Lithuania",
      "code": "370",
      "iso": "LT"
    },
    {
      "country": "Luxembourg",
      "code": "352",
      "iso": "LU"
    },
    {
      "country": "Madagascar",
      "code": "261",
      "iso": "MG"
    },
    {
      "country": "Malawi",
      "code": "265",
      "iso": "MW"
    },
    {
      "country": "Malaysia",
      "code": "60",
      "iso": "MY"
    },
    {
      "country": "Maldives",
      "code": "960",
      "iso": "MV"
    },
    {
      "country": "Mali",
      "code": "223",
      "iso": "ML"
    },
    {
      "country": "Malta",
      "code": "356",
      "iso": "MT"
    },
    {
      "country": "Marshall Islands",
      "code": "692",
      "iso": "MH"
    },
    {
      "country": "Martinique",
      "code": "596",
      "iso": "MQ"
    },
    {
      "country": "Mauritania",
      "code": "222",
      "iso": "MR"
    },
    {
      "country": "Mauritius",
      "code": "230",
      "iso": "MU"
    },
    {
      "country": "Mayotte",
      "code": "262",
      "iso": "YT"
    },
    {
      "country": "Mexico",
      "code": "52",
      "iso": "MX"
    },
    {
      "country": "Monaco",
      "code": "377",
      "iso": "MC"
    },
    {
      "country": "Mongolia",
      "code": "976",
      "iso": "MN"
    },
    {
      "country": "Montenegro",
      "code": "382",
      "iso": "ME"
    },
    {
      "country": "Montserrat",
      "code": "1664",
      "iso": "MS"
    },
    {
      "country": "Morocco",
      "code": "212",
      "iso": "MA"
    },
    {
      "country": "Myanmar",
      "code": "95",
      "iso": "MM"
    },
    {
      "country": "Namibia",
      "code": "264",
      "iso": "NA"
    },
    {
      "country": "Nauru",
      "code": "674",
      "iso": "NR"
    },
    {
      "country": "Nepal",
      "code": "977",
      "iso": "NP"
    },
    {
      "country": "Netherlands",
      "code": "31",
      "iso": "NL"
    },
    {
      "country": "Netherlands Antilles",
      "code": "599",
      "iso": "AN"
    },
    {
      "country": "New Caledonia",
      "code": "687",
      "iso": "NC"
    },
    {
      "country": "New Zealand",
      "code": "64",
      "iso": "NZ"
    },
    {
      "country": "Nicaragua",
      "code": "505",
      "iso": "NI"
    },
    {
      "country": "Niger",
      "code": "227",
      "iso": "NE"
    },
    {
      "country": "Nigeria",
      "code": "234",
      "iso": "NG"
    },
    {
      "country": "Niue",
      "code": "683",
      "iso": "NU"
    },
    {
      "country": "Norfolk Island",
      "code": "672",
      "iso": "NF"
    },
    {
      "country": "Northern Mariana Islands",
      "code": "1 670",
      "iso": "MP"
    },
    {
      "country": "Norway",
      "code": "47",
      "iso": "NO"
    },
    {
      "country": "Oman",
      "code": "968",
      "iso": "OM"
    },
    {
      "country": "Pakistan",
      "code": "92",
      "iso": "PK"
    },
    {
      "country": "Palau",
      "code": "680",
      "iso": "PW"
    },
    {
      "country": "Panama",
      "code": "507",
      "iso": "PA"
    },
    {
      "country": "Papua New Guinea",
      "code": "675",
      "iso": "PG"
    },
    {
      "country": "Paraguay",
      "code": "595",
      "iso": "PY"
    },
    {
      "country": "Peru",
      "code": "51",
      "iso": "PE"
    },
    {
      "country": "Philippines",
      "code": "63",
      "iso": "PH"
    },
    {
      "country": "Poland",
      "code": "48",
      "iso": "PL"
    },
    {
      "country": "Portugal",
      "code": "351",
      "iso": "PT"
    },
    {
      "country": "Puerto Rico",
      "code": "1 939",
      "iso": "PR"
    },
    {
      "country": "Qatar",
      "code": "974",
      "iso": "QA"
    },
    {
      "country": "Romania",
      "code": "40",
      "iso": "RO"
    },
    {
      "country": "Rwanda",
      "code": "250",
      "iso": "RW"
    },
    {
      "country": "Samoa",
      "code": "685",
      "iso": "WS"
    },
    {
      "country": "San Marino",
      "code": "378",
      "iso": "SM"
    },
    {
      "country": "Saudi Arabia",
      "code": "966",
      "iso": "SA"
    },
    {
      "country": "Senegal",
      "code": "221",
      "iso": "SN"
    },
    {
      "country": "Serbia",
      "code": "381",
      "iso": "RS"
    },
    {
      "country": "Seychelles",
      "code": "248",
      "iso": "SC"
    },
    {
      "country": "Sierra Leone",
      "code": "232",
      "iso": "SL"
    },
    {
      "country": "Singapore",
      "code": "65",
      "iso": "SG"
    },
    {
      "country": "Slovakia",
      "code": "421",
      "iso": "SK"
    },
    {
      "country": "Slovenia",
      "code": "386",
      "iso": "SI"
    },
    {
      "country": "Solomon Islands",
      "code": "677",
      "iso": "SB"
    },
    {
      "country": "South Africa",
      "code": "27",
      "iso": "ZA"
    },
    {
      "country": "South Georgia and the South Sandwich Islands",
      "code": "500",
      "iso": "GS"
    },
    {
      "country": "Spain",
      "code": "34",
      "iso": "ES"
    },
    {
      "country": "Sri Lanka",
      "code": "94",
      "iso": "LK"
    },
    {
      "country": "Sudan",
      "code": "249",
      "iso": "SD"
    },
    {
      "country": "Suricountry",
      "code": "597",
      "iso": "SR"
    },
    {
      "country": "Swaziland",
      "code": "268",
      "iso": "SZ"
    },
    {
      "country": "Sweden",
      "code": "46",
      "iso": "SE"
    },
    {
      "country": "Switzerland",
      "code": "41",
      "iso": "CH"
    },
    {
      "country": "Tajikistan",
      "code": "992",
      "iso": "TJ"
    },
    {
      "country": "Thailand",
      "code": "66",
      "iso": "TH"
    },
    {
      "country": "Togo",
      "code": "228",
      "iso": "TG"
    },
    {
      "country": "Tokelau",
      "code": "690",
      "iso": "TK"
    },
    {
      "country": "Tonga",
      "code": "676",
      "iso": "TO"
    },
    {
      "country": "Trinidad and Tobago",
      "code": "1 868",
      "iso": "TT"
    },
    {
      "country": "Tunisia",
      "code": "216",
      "iso": "TN"
    },
    {
      "country": "Turkey",
      "code": "90",
      "iso": "TR"
    },
    {
      "country": "Turkmenistan",
      "code": "993",
      "iso": "TM"
    },
    {
      "country": "Turks and Caicos Islands",
      "code": "1 649",
      "iso": "TC"
    },
    {
      "country": "Tuvalu",
      "code": "688",
      "iso": "TV"
    },
    {
      "country": "Uganda",
      "code": "256",
      "iso": "UG"
    },
    {
      "country": "Ukraine",
      "code": "380",
      "iso": "UA"
    },
    {
      "country": "Uruguay",
      "code": "598",
      "iso": "UY"
    },
    {
      "country": "Uzbekistan",
      "code": "998",
      "iso": "UZ"
    },
    {
      "country": "Vanuatu",
      "code": "678",
      "iso": "VU"
    },
    {
      "country": "Wallis and Futuna",
      "code": "681",
      "iso": "WF"
    },
    {
      "country": "Yemen",
      "code": "967",
      "iso": "YE"
    },
    {
      "country": "Zambia",
      "code": "260",
      "iso": "ZM"
    },
    {
      "country": "Zimbabwe",
      "code": "263",
      "iso": "ZW"
    },
    {
      "country": "Antarctica",
      "code": null,
      "iso": "AQ"
    },
    {
      "country": "Bolivia",
      "code": "591",
      "iso": "BO"
    },
    {
      "country": "Brunei Darussalam",
      "code": "673",
      "iso": "BN"
    },
    {
      "country": "Cocos (Keeling) Islands",
      "code": "61",
      "iso": "CC"
    },
    {
      "country": "Congo, The Democratic Republic of the",
      "code": "243",
      "iso": "CD"
    },
    {
      "country": "Cote d'Ivoire",
      "code": "225",
      "iso": "CI"
    },
    {
      "country": "Falkland Islands (Malvinas)",
      "code": "500",
      "iso": "FK"
    },
    {
      "country": "Guernsey",
      "code": "44",
      "iso": "GG"
    },
    {
      "country": "Holy See (Vatican City State)",
      "code": "379",
      "iso": "VA"
    },
    {
      "country": "Hong Kong",
      "code": "852",
      "iso": "HK"
    },
    {
      "country": "Iran, Islamic Republic of",
      "code": "98",
      "iso": "IR"
    },
    {
      "country": "Isle of Man",
      "code": "44",
      "iso": "IM"
    },
    {
      "country": "Jersey",
      "code": "44",
      "iso": "JE"
    },
    {
      "country": "Korea, Democratic People's Republic of",
      "code": "850",
      "iso": "KP"
    },
    {
      "country": "Korea, Republic of",
      "code": "82",
      "iso": "KR"
    },
    {
      "country": "Lao People's Democratic Republic",
      "code": "856",
      "iso": "LA"
    },
    {
      "country": "Macao",
      "code": "853",
      "iso": "MO"
    },
    {
      "country": "Macedonia, The Former Yugoslav Republic of",
      "code": "389",
      "iso": "MK"
    },
    {
      "country": "Micronesia, Federated States of",
      "code": "691",
      "iso": "FM"
    },
    {
      "country": "Moldova, Republic of",
      "code": "373",
      "iso": "MD"
    },
    {
      "country": "Mozambique",
      "code": "258",
      "iso": "MZ"
    },

    {
      "country": "Pitcairn",
      "code": "872",
      "iso": "PN"
    },
    {
      "country": "Réunion",
      "code": "262",
      "iso": "RE"
    },
    {
      "country": "Russian Federation",
      "code": "7",
      "iso": "RU"
    },
    {
      "country": "Saint Barthélemy",
      "code": "590",
      "iso": "BL"
    },
    {
      "country": "Saint Helena, Ascension and Tristan Da Cunha",
      "code": "290",
      "iso": "SH"
    },
    {
      "country": "Saint Kitts and Nevis",
      "code": "1 869",
      "iso": "KN"
    },
    {
      "country": "Saint Lucia",
      "code": "1 758",
      "iso": "LC"
    },
    {
      "country": "Saint Martin",
      "code": "590",
      "iso": "MF"
    },
    {
      "country": "Saint Pierre and Miquelon",
      "code": "508",
      "iso": "PM"
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "code": "1 784",
      "iso": "VC"
    },
    {
      "country": "Sao Tome and Principe",
      "code": "239",
      "iso": "ST"
    },
    {
      "country": "Somalia",
      "code": "252",
      "iso": "SO"
    },
    {
      "country": "Svalbard and Jan Mayen",
      "code": "47",
      "iso": "SJ"
    },
    {
      "country": "Syrian Arab Republic",
      "code": "963",
      "iso": "SY"
    },
    {
      "country": "Taiwan",
      "code": "886",
      "iso": "TW"
    },
    {
      "country": "Tanzania, United Republic of",
      "code": "255",
      "iso": "TZ"
    },
    {
      "country": "Timor-Leste",
      "code": "670",
      "iso": "TL"
    },
    {
      "country": "Venezuela",
      "code": "58",
      "iso": "VE"
    },
    {
      "country": "Viet Nam",
      "code": "84",
      "iso": "VN"
    },
    {
      "country": "Virgin Islands, British",
      "code": "1 284",
      "iso": "VG"
    },
    {
      "country": "Virgin Islands, U.S.",
      "code": "1 340",
      "iso": "VI"
    }
  ];
  searchText: string = '';
  keyupSearch(event: any) {
    this.filteredCountries = this.Countries?.filter(country =>
      country?.country.toLowerCase().includes(this.searchText?.toLowerCase())
    );
  }

  daywise: boolean = false;
  displaynone = 'displaynone';
  openDropDaywise() {
    this.keyupSearch('')
    this.daywise = !this.daywise;
    this.isPopupVisible = !this.isPopupVisible;
  }

  isPopupVisible: boolean = false;
  selectCountry(code: string, name: string) {
    this.selectedCountry = '+' + code;
    this.selectedName = name;

    // Hide the popup after selecting a country
    this.isPopupVisible = false;
  }
}
export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};