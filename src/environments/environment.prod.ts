let hostname = window.origin;

console.log(hostname, 'Env');

export const environment = {
  production: true,
  siteName: 'cricExch',
  // baseUrl: 'http://51.195.220.62:81', // Test
  baseUrl: 'http://136.244.79.114:81', // prod
  apisUrl: 'https://access.vrnlapi.live:3445/api/all_apis',
  BDapisUrl: 'https://access.vrnlapi.live:3445/api/all_apis',
  // baseUrl: 'https://exchangegames.xyz/pad=81', // prod
  tvUrl: 'https://streamingtv.fun/live_tv/index.html',
  currency: '', //It should be blank here for Dynamic currency
  timeFormat: '',
  showCurrency: true,
  isProduction: true,
  scoreUrl: 'http://7skyexch.fun:3030/score_api',
  iframeTVScoreurl: 'https://555555.services',
  oddsSocketUrl: 'ws://209.250.242.175',
  captcha: true,
  isSettingAllow: false,
  origin: '',
  oldAdmin: false,
  addagentform: false,
  addagentnewform: false,
  commissionlevel: false,
  isdailyreport: false,
  commissionfive: false,
  isShoweye: false,
  whatsapp: '',
  whatsapp1: '',
  skype: '',
  insta: '',
  telegram: '',
  telegram1: '',
  mail: '',
  transferdelay: false,
  settlemettab: false,
  loader: false,
  manual: true,
  fb: '',
  web: '',
  isshowpass: false,
  userMultiplier: 0,
  socialmediasection: true,
  isAWCcasino: false,
  AWCresult: false,
  isPremiumSite: false,
  isBdlevel: false,
  isRental: false,
  isSharing: false,
  isB2C: false,
  isFirstTimePassword: true,
  isSupernova: false,
  isSlot: false,
  isSkyFancy: false,
  xpgPay: false,
  isbetgame: false,
  islanguage: false,
  domainMap: [],
  isBajilogin: false,
  isAuracasino: false,
  isTrnNo: false,
  isSocialTab: false,
  isDiamondReport: false,
  isClientpass: false,
  siteswiseshowmmtab: false,
  isstraighthierarchy: false,
  showAvailtab: false,
  showbettab: false,
  betgamelevel: false,
  showbetserrormsg: false,
  showalllevellock: false,
  showpopticker: false,
  showskyerromsg: false,
  isEmlevel: false,
  isCallreport: true,
  showMM: true,
  isBOcasino: false,
  hidesetting: true,
  isparlay: true,
  justToday: false,
  isEditexpo: false,
  showbankstatus: false,
  emran_MM_setting: false,
  isAllcasino: true,
  vrnlb2c: false,
  showaccountdetailsAD: false,
  bankingrefersh: true,
  onlyShowpanel: false,
  isjio22: false,
  isSummaryreport: false,
  jio22level: false,
  onlyjio25 :false,
  showiframepanel:false,
  beebanking : false,
  showcreateuser : true,
  Downlinesetting:false,
  showagetlist:false,
  Hidereport:false,
  isisSocialTabb2c:true,
  PwdActivityRP:false,   //password activity report
  UserNamefield:false, //user name feild in user creat form 
  play25SummReport:false,
  isAnalysisFlag :false,
  addb2bform :false,
  downlineFast:false,
  isCreadref :false,
  isBlockmarket :true,
  isSkyreoprs:false,
  isLifetimePL:false,
  foxplayrisk : false,
  skyriskmanagemeny : false,
  riskdropdown : true,
  isAgentreferal :false,
  SubDomainPack : false,
  isskystatus:false,
};

if (hostname.indexOf('cricbuzzer.io') > -1) {
  environment.siteName = 'cricBuzzer';
  environment.origin = 'cricbuzzer.io';
  environment.settlemettab = true;
  environment.isparlay = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.islanguage = true;
  environment.isB2C = true;
  environment.addagentnewform = true;
  environment.isSocialTab = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = false;
  environment.riskdropdown = false;
}
else if (hostname.indexOf('cricbuzzer.live') > -1) {
  environment.siteName = 'cricbuzzerlive';
  environment.origin = 'cricbuzzer.live';
  environment.settlemettab = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.islanguage = true;
  environment.isB2C = true;
  environment.addagentnewform = true;
  environment.isSocialTab = true;
  environment.isFirstTimePassword = false;
  environment.isEditexpo = true;
  environment.bankingrefersh = false;
  environment.riskdropdown = false;
}


else if (hostname.indexOf('cxwelcome.live') > -1) {
  environment.siteName = 'cxwelcome';
  environment.origin = 'cxwelcome.live';
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.addagentnewform = true;
  environment.isdailyreport = true;
  environment.oldAdmin = true;
  environment.isTrnNo = true;
  environment.isEditexpo = true;
  environment.showcreateuser = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
  environment.isAgentreferal=true;
  environment.isstraighthierarchy=true;
  environment.isbetgame = true;
  environment.isFirstTimePassword = false;
  environment.isskystatus = true;
}
else if (hostname.indexOf('jara11.bet') > -1) {
  environment.siteName = 'jara11';
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isdailyreport = true;
  environment.oldAdmin = true;
  environment.isTrnNo = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;
  environment.isBOcasino = true;
  environment.isbetgame = true;
}
else if (hostname.indexOf('mybazzi.live') > -1) {
  environment.siteName = 'mybazzi';
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.oldAdmin = true;
  environment.isTrnNo = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;
  environment.isBOcasino = true;
}
else if (hostname.indexOf('velki10.com') > -1) {
  environment.siteName = 'velki10';
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.oldAdmin = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isTrnNo = true;
  environment.isisSocialTabb2c = true;
  environment.isBOcasino = true;
}

else if (hostname.indexOf('jackpotbj.com') > -1) {
  environment.siteName = 'jackpotbj';
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isdailyreport = true;
  environment.oldAdmin = true;
  environment.isTrnNo = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = false;
  environment.showcreateuser = false;
  environment.isisSocialTabb2c = true;
  environment.isBOcasino = true;
}


else if (hostname.indexOf('babu365.com') > -1) {
  environment.siteName = 'babu365';
  environment.origin = 'babu365.com';
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.oldAdmin = true;
  environment.isbetgame = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;
  environment.isB2C= true;
  environment.isAgentreferal=true;
  environment.isdailyreport=true;
  environment.isstraighthierarchy=true;
  environment.SubDomainPack = true;
  environment.isskystatus = true;
}
else if (hostname.indexOf('bookiees.com') > -1) {
  environment.siteName = 'bookiees';
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isdailyreport = true;
  environment.oldAdmin = true;
  environment.isTrnNo = true;
  environment.isbetgame = true;
  environment.isAuracasino = false;
  environment.isFirstTimePassword = false;
  environment.isEditexpo = true;
  environment.showcreateuser = false;
  environment.isisSocialTabb2c = true;
  environment.riskdropdown = true;
  environment.isskystatus = true;
  environment.isparlay = true;

}
else if (hostname.indexOf('cricwin.io') > -1) {
  environment.siteName = 'cricwin';
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isdailyreport = true;
  environment.oldAdmin = true;
  environment.isTrnNo = true;
  environment.isbetgame = true;
  environment.isAuracasino = false;
  environment.isFirstTimePassword = false;
  environment.isEditexpo = true;
  environment.showcreateuser = false;
  environment.isisSocialTabb2c = true;
  environment.riskdropdown = true;
  environment.isskystatus = true;
  environment.isparlay = true;

}
else if (hostname.indexOf('9xbet.vip') > -1) {
  environment.siteName = 'xbet9';
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isAWCcasino = true;
  environment.isAuracasino = true;
  environment.addagentnewform = true;
  environment.isdailyreport = true;
  environment.isparlay = false;
  environment.isTrnNo = true;
  environment.commissionfive = true;
  environment.isSkyFancy = true;
  environment.isBlockmarket = true;
  environment.isisSocialTabb2c = true;
  environment.riskdropdown = false;
  environment.isshowpass = true;
}
else if (hostname.indexOf('baji.win') > -1) {
  environment.siteName = 'baji';
  environment.oldAdmin = true
  environment.settlemettab = true;
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isAuracasino = true;
  environment.addagentnewform = true;
  environment.isdailyreport = true;
  environment.isPremiumSite = true;
  environment.isTrnNo = true;
  environment.commissionfive = true;
  environment.bankingrefersh = false;
  environment.isDiamondReport = true
  environment.showcreateuser = true;
  environment.isSummaryreport = true;
  environment.isisSocialTabb2c = true;

}

else if (hostname.indexOf('velkibuzzer.io') > -1) {
  environment.siteName = 'velkibuzzer';
  environment.isProduction = false;
  environment.isPremiumSite = true;
  environment.isbetgame = true;
  environment.isEditexpo = true;
  environment.isB2C = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.showcreateuser = false;
  environment.isisSocialTabb2c = true;
}

else if (hostname.indexOf('nagadwin.com') > -1) {
  environment.siteName = 'nagadwin';
  environment.origin = 'nagadwin.com';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.oldAdmin = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.isB2C= true;
  environment.isdailyreport = true;
  environment.isTrnNo = true;
  environment.isBOcasino = true;
  environment.isisSocialTabb2c = true;
}
else if (hostname.indexOf('mybaji.com') > -1) {
  environment.siteName = 'mybaji';
  environment.origin = 'mybaji.com';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.oldAdmin = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.isB2C= true;
  environment.isdailyreport = true;
  environment.isTrnNo = true;
  environment.isBOcasino = true;
  environment.isisSocialTabb2c = true;
}
else if (hostname.indexOf('velki.fun') > -1) {
  environment.siteName = 'velkifun';
  environment.origin ='velki.fun'
  environment.isPremiumSite = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;
  environment.isBajilogin = true;
  environment.isB2C= true;
}
console.log(environment.siteName);
