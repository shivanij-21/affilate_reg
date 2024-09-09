import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  referralcode: any=0;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private toastr: ToastrService,
  ) {
    this.route.queryParams.subscribe(params => {
      this.referralcode = params?.['referal_code'];
    
      if (this.referralcode) {
        localStorage.setItem('referral_code', this.referralcode);
        this.userRegForm.get('referredBy')?.setValue(this.referralcode);
      } else {
        const storedReferralCode = localStorage.getItem('referral_code');
        if (storedReferralCode) {
          this.userRegForm.get('referredBy')?.setValue(storedReferralCode);
        }
      }
    });

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
    const storedReferralCode = localStorage.getItem('referral_code');
    if (storedReferralCode) {
      this.userRegForm.get('referredBy')?.setValue(storedReferralCode);
    }
  
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
    if (this.userRegForm.invalid) {
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
      const storedReferralCode = localStorage.getItem('referral_code') || this.userRegForm.value.referredBy;
      let adminUserName = '';
      if (this.siteName === 'babu365') {
        adminUserName = 'babu365USD';
      } else if (this.siteName === 'cxwelcome') {
        adminUserName = 'cxwelcomeUSD';
      } 
      let data = {
        referredBy: storedReferralCode,
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
        phoneNumber: this.userRegForm.value.phoneNumber,
        email: this.userRegForm.value.email,
        adminRefCom: 40,
        agentRefCom: 10
      }

      console.log(data, "data");

      this.usersService.register(data).subscribe((res: any) => {
        // console.log(res);
        if (res.errorCode == 0) {
          this.toastr.success(res.message);
          let body = {
            "b2cID": newId,
            "domain": this.origin,
            "username": this.userRegForm.value.userName
          };
        

          setTimeout(() => {
            this.usersService.postB2cID(body).subscribe((response) => {
              console.log(response);
            });
          }, 5000);
          this.userRegForm.reset();
        }
        else{
          this.toastr.error(res.errorDescription);
        }
      });
    });
  }

  userRegForm: FormGroup;
  Allowedcaptcha: boolean = true;
  isClient: boolean = false;
  isprepaidOpen: boolean = false;
  isPremiumSite = environment.isPremiumSite;
  fullsharechkbx: boolean = false;
  userRegDefaultValues = {};
 

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

  blocktoster: boolean = false;
  tosterMessage: string = '';
  closeToster() {
    this.blocktoster = false;
  }
  showToster(message: string) {
    this.tosterMessage = message;
    this.blocktoster = true;
    setTimeout(() => {
      this.closeToster();
    }, 2000); // Hide after 2 seconds
  }
}
export const passwordMatchingValidatior: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password?.value === confirmPassword?.value ? null : { notmatched: true };
};