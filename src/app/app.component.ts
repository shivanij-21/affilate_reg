import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './sevices/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'affilate';

  // siteName = environment.siteName;
  selectedCountry = "+91";
  selectedName = "India";
  phoneSubmitted: boolean = false;
  submitted: boolean = false;
  // domain = environment.origin;
  // origin = environment.origin

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) {
    this.userRegForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      con_password: ['', Validators.required],
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      referredBy: [0]
    });
  }

  ngOnInit(): void {

    this.initUserRegForm()
    console.log("this.user", this.userRegForm.value)
    this.userRegDefaultValues = this.userRegForm.value;
    this.route.paramMap.subscribe(paramMap => {
      // this.userType = +paramMap.get('userType');
    })
    // this.register()
  }

  initUserRegForm() {
    this.userRegForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      con_password: ['', Validators.required],
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      referredBy: [0]
    });
    console.log("this.user", this.userRegForm.value)

  }


  get pf() {
    return this.userRegForm?.controls;
  }

  private currentId = 1000000061;
  private upperLimit = 1001000060;
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

      let data = {
        referredBy: this.userRegForm.value.referredBy,
        adminUserName: "babu365USD",
        userName: this.userRegForm.value.userName,
        password: this.userRegForm.value.password,
        con_password: this.userRegForm.value.con_password,
        fullName: this.userRegForm.value.fullName,
        userType: 0,
        domain: 'babu365.com',
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
        phoneNumber: this.userRegForm.value.phoneNumber,
        email: this.userRegForm.value.email,
        adminRefCom: 50,
        agentRefCom: 10
      }

      console.log(data, "data");

      this.usersService.register(data).subscribe((res: any) => {
        // console.log(res);
        if (res.errorCode == 0) {
          let body = {
            "b2cID": newId,
            "domain": 'babu365.com',
            "username": this.userRegForm.value.userName
          };

          setTimeout(() => {
            this.usersService.postB2cID(body).subscribe((response) => {
              console.log(response);
            });
          }, 5000);
        }

      });
    });
  }

  userRegForm: FormGroup;
  userType?: number = 0;
  Allowedcaptcha: boolean = true;
  isClient: boolean = false;
  isprepaidOpen: boolean = false;
  // isPremiumSite = environment.isPremiumSite;
  fullsharechkbx: boolean = false;
  userRegDefaultValues = {};
  currencyMap = [
    { id: 0, name: 'INR' },
    { id: 1, name: 'USD' },
    { id: 2, name: 'HKD' },
    { id: 3, name: 'PTS' },
    { id: 4, name: 'PBU' },
    { id: 5, name: 'PSD' },
    { id: 6, name: 'PKU' },
    { id: 7, name: 'PTH' },
    { id: 8, name: 'BDT' },
    { id: 9, name: 'BZR' },
    { id: 10, name: 'PKR' },
    { id: 31, name: 'MYR' },
    { id: 32, name: 'BLR' },
  ];


  stakeformatted() {
    if (this.userRegForm.value.stake1) {
      var stakes = [this.userRegForm.value.stake1,
      this.userRegForm.value.stake2,
      this.userRegForm.value.stake3,
      this.userRegForm.value.stake4,
      this.userRegForm.value.stake5,
      this.userRegForm.value.stake6,
      this.userRegForm.value.stake7,
      this.userRegForm.value.stake8,
      this.userRegForm.value.stake9,
      this.userRegForm.value.stake10]
    } else {
      var stakes = [];
    }

    return stakes.toString();
  }

  visiblePassword = false;
  showPassword() {
    this.visiblePassword = !this.visiblePassword;
  }

  visibleconfirm = false;
  showconfirm() {
    this.visibleconfirm = !this.visibleconfirm;
  }
}
export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};