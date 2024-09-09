// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.

import * as moment from "moment";

// The list of file replacements can be found in `angular.json`.
var from = new Date();
var date = moment(from).format('ZZ');
// console.log(date);
let hostname = window.origin;

export const environment = {
  production: true,
  siteName: 'babu365',
  xpgPay: true,
  // baseUrl: 'http://51.195.220.62:81', // Test
  baseUrl: 'http://136.244.79.114:81', // prod
  apisUrl: 'https://access.vrnlapi.live:3445/api/all_apis',
  BDapisUrl: 'https://access.vrnlapi.live:3445/api/all_apis',
  // baseUrl: 'https://exchangegames.xyz/pad=81', // prod
  tvUrl: "https://tvlivestreaming.online/live_tv0test/index.html",
  currency: '', //for currency
  timeFormat: date,   // changing time format
  showCurrency: true,   // for dissplaying currency
  isProduction: true,   //for false for devip and true for adminIP
  scoreUrl: 'http://streamingtv.fun:3030/score_api',
  iframeTVScoreurl: "https://555555.services",
  oddsSocketUrl: 'ws://209.250.242.175',
  captcha: true,
  origin: 'babu365.com',
  isSettingAllow: false,
  oldAdmin: false, //for horizontal view for risk management
  addagentform: false, 
  addagentnewform: false,
  commissionlevel: false,
  commissionfive: false,// for 5% default commssion
  betgamelevel: false, 
  addb2bform :  true,
  isdailyreport: true, // for B2C site
  isShoweye: false,
  showbankstatus: true, // for show status dropdown in banking
  siteswiseshowmmtab: false,  // to show MM till master
  whatsapp: "",
  whatsapp1: "",
  skype: "",
  insta: "",
  telegram: "skyinplay365official",
  telegram1: "skyinplay365official",
  mail: "",
  fb: "",
  web: "",
  transferdelay: false, // to add delay in DW
  settlemettab: true,
  loader: true,
  manual: true,
  userMultiplier: 0,
  socialmediasection: true,
  isAWCcasino: true,
  AWCresult :false,
  isFirstTimePassword: false,
  PwdActivityRP : false,// to see own password activity 
  UserNamefield : false,
  isSupernova: true,
  isSlot: true,
  isshowpass: true,
  isSkyFancy: false,// for sky fancy admin in risk management
  isSharing: false,
  isbetgame: true,
  islanguage: false,
  isB2C:true,
  isBajilogin: false, // true for Baji login Page
  isAuracasino: false,
  isPremiumSite: false , //for Premium sites with Risk management and LC hierarchy also used this flag with BD hierarchy and Normal old Hirarchy
  isBdlevel: false, // for BD levels Hierarchy with premium flag and without premium flag
  isRental: false, // for Normal Vrnl old Hierarchy with premium flag and without premium flag
  isTrnNo: false,
  isEditexpo: true, // to give edit exposure option in summery
  isSocialTab: true,
  isDiamondReport: false,
  isAllcasino:true,
  isClientpass: true,
  isstraighthierarchy: true, // for straight hierarchy tab in MM
  showAvailtab: false,
  showbettab: false,
  showalllevellock: false,
  showbetserrormsg: false, // betgame toaster
  showpopticker: false,
  showskyerromsg: true, // lc toaster
  isEmlevel: false, // emraan dada level
  isCallreport: true, 
  showMM: true,
  isBOcasino: false,
  hidesetting: true,
  isparlay: true,
  justToday: true,
  emran_MM_setting: false,
  vrnlb2c : false,
  showaccountdetailsAD : true, //show account details till admin
  bankingrefersh : true, // to stop refresh banking page
  onlyShowpanel : false ,//jio panel
  showiframepanel : false,//iframe panel
  isjio22 : false,
  isSummaryreport :false ,// to give summary repprt
  jio22level : false, // for jio22 heighrachy
  onlyjio25 : false, // only for jio25 and play25
  beebanking :false, // only for bee25 
  showcreateuser:true,
  Downlinesetting:true,
  showagetlist:true,
  Hidereport:false,
  isisSocialTabb2c:true,
  play25SummReport:true,
  isAnalysisFlag : true,
  downlineFast:false,
  isCreadref :false,
  isBlockmarket :true,
  isSkyreoprs:false,
  isLifetimePL:true,
  foxplayrisk : false,
  skyriskmanagemeny : false,
  riskdropdown:true,
  isskystatus:true,
  isAgentreferal : true, // multiagent
  SubDomainPack:false,
  domainMap: [
    { id: 0, name: 'cricbuzzer.io' },
  ]

};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
