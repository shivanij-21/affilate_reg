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
  // domainMap: [] as Array<{ id: number; name: string }>,
};

if (hostname.indexOf('lc247.live') > -1) {
  environment.siteName = 'lc247';
  environment.origin = 'lc247.live';
  environment.isPremiumSite = true; // Define once
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.isBlockmarket = true;

  // // Ensure there are no duplicates
  // environment.domainMap = [
  //   { id: 0, name: 'cricbuzzer.io' },
  //   // Add other domains if necessary
  // ];
}

else if (hostname.indexOf('lc247.bet') > -1) {
  environment.siteName = 'lc247';
  environment.origin = 'lc247.bet';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  //environment.hidesetting = false;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.isBlockmarket = true;
    // environment.domainMap = [
    //   { id: 1, name: 'lc247.bet' }
    // ];

}
else if (hostname.indexOf('lc247.games') > -1) {
  environment.siteName = 'lc247';
  environment.origin = 'lc247.games';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  //environment.hidesetting = false;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
    environment.bankingrefersh = false;
    environment.PwdActivityRP = true;
    environment.UserNamefield = true;
    environment.isBlockmarket = true;
  // environment.domainMap = [
  //   { id: 1, name: 'lc247.games' }
  // ];

}
else if (hostname.indexOf('lc247.art') > -1) {
  environment.siteName = 'lc247art';
  environment.origin = 'lc247.art';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.bankingrefersh = false;
  environment.transferdelay = true,
  environment.UserNamefield = true,
    environment.domainMap = [
      // { id: 1, name: 'lc247.bet' }
    ];

}
else if (hostname.indexOf('bazzi365.pro') > -1) {
  environment.siteName = 'bazzi365';
  environment.origin = 'bazzi365.pro';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;

}
else if (hostname.indexOf('lc247.asia') > -1) {
  environment.siteName = 'lc247';
  environment.origin = 'lc247.asia';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  //environment.hidesetting = false;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
  environment.bankingrefersh = false;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.isBlockmarket = true;
}
else if (hostname.indexOf('lc247.club') > -1) {
  environment.siteName = 'lc247';
  environment.origin = 'lc247.club';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  //environment.hidesetting = false;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
  environment.bankingrefersh = false;
  environment.PwdActivityRP = true;
  environment.isBlockmarket = true;
}
else if (hostname.indexOf('lc247.news') > -1) {
  environment.siteName = 'lc247';
  environment.origin = 'lc247.news';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  //environment.hidesetting = false;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
  environment.bankingrefersh = false;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.isBlockmarket = true;
}
else if (hostname.indexOf('lc247.fun') > -1) {
  environment.siteName = 'lc247';
  environment.origin = 'lc247.fun';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  //environment.hidesetting = false;
  environment.whatsapp = '+13159755293';
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
  environment.bankingrefersh = false;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.isBlockmarket = true;
}

else if (hostname.indexOf('bazzi365.com') > -1) {
  environment.siteName = 'bazzi365';
  environment.origin = 'bazzi365.com';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('bazzi365.in') > -1) {
  environment.siteName = 'bazzi365';
  environment.origin = 'bazzi365.in';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('bazzi365.cc') > -1) {
  environment.siteName = 'bazzi365';
  environment.origin = 'bazzi365.cc';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;

}
else if (hostname.indexOf('bazzi365.co') > -1) {
  environment.siteName = 'bazzi365';
  environment.origin = 'bazzi365.co';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('bazi360.live') > -1) {
  environment.siteName = 'bazi365';
  environment.origin = 'bazi360.live';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('maza246.live') > -1) {
  environment.siteName = 'maza247';
  environment.origin = 'maza246.live';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  environment.captcha = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('betgame247.live') > -1 ) {
  environment.siteName = 'betgame247';
  environment.origin = 'betgame247.live';
  //environment.hidesetting = false;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
  environment.captcha = false;
}
else if ( hostname.indexOf('skynext247.com') > -1 ) {
  environment.siteName = 'skynext247';
  environment.origin = 'skynext247.com';
  //environment.hidesetting = false;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
  environment.isisSocialTabb2c = true;
  environment.isAuracasino = true
}
else if (  hostname.indexOf('skynext247.live') > -1) {
  environment.siteName = 'skynext247';
  environment.origin = 'skynext247.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
  environment.isisSocialTabb2c = true;
  environment.isAuracasino = true

}
else if (hostname.indexOf('bg247.live') > -1) {
  environment.siteName = 'betgame247';
  environment.origin = 'bg247.live';
  //environment.hidesetting = false;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
}
else if (hostname.indexOf('bg247.club') > -1) {
  environment.siteName = 'betgame247';
  environment.origin = 'bg247.club';
  //environment.hidesetting = false;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
}
else if (hostname.indexOf('bg247.online') > -1) {
  environment.siteName = 'betgame247';
  environment.origin = 'bg247.online';
  //environment.hidesetting = false;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
}
else if (hostname.indexOf('onbet247.com') > -1) {
  environment.siteName = 'onbet247';
  environment.origin = 'onbet247.com';
  environment.isBdlevel = true;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isparlay = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
  // environment.domainMap = [
  //   { id: 0, name: 'veelki.live' },
  // ];
}
else if (hostname.indexOf('onbet247.live') > -1) {
  environment.siteName = 'onbet247';
  environment.origin = 'onbet247.live';
  environment.isBdlevel = true;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isparlay = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
  // environment.domainMap = [
  //   { id: 0, name: 'veelki.live' },
  // ];
}
else if (hostname.indexOf('onbet247.bet') > -1) {
  environment.siteName = 'onbet247';
  environment.origin = 'onbet247.bet';
  environment.isBdlevel = true;
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isparlay = true;
  environment.showaccountdetailsAD = true;
  environment.UserNamefield = true;
  // environment.domainMap = [
  //   { id: 0, name: 'veelki.live' },
  // ];
}
else if (hostname.indexOf('lc247.co') > -1) {
  environment.siteName = 'lc247co';
  environment.origin = 'lc247.co';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isSharing = true;
  environment.islanguage = true;
  environment.isEditexpo = true;
  environment.PwdActivityRP = true;
  // environment.domainMap = [
  //   { id: 0, name: '3wickets.bet' },
  //   { id: 2, name: '1wicket.vip' },
  // ];
}
else if (hostname.indexOf('bguruu.com') > -1 ) {
  environment.siteName = 'bguruu';
  environment.origin = 'bguruu.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isBOcasino = true;
}
else if (hostname.indexOf('betguruu.live') > -1 ) {
  environment.siteName = 'bguruu';
  environment.origin = 'betguruu.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isBOcasino = true;
}
else if (hostname.indexOf('betguruu.com') > -1 ) {
  environment.siteName = 'bguruu';
  environment.origin = 'betguruu.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isAWCcasino = true; 
  environment.isbetgame = true;
  environment.isBOcasino = true;
}
else if (hostname.indexOf('cricbuzzer.io') > -1) {
  environment.siteName = 'cricBuzzer';
  environment.origin = 'cricbuzzer.io';
  environment.settlemettab = true;
  environment.isparlay = false;
  environment.isAWCcasino = true;
  // environment.isPremiumSite = true;
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
  // environment.commissionfive = true;
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
else if (hostname.indexOf('9xbet.vip') > -1) {
  environment.siteName = 'xbet9';
  environment.isSkyFancy = true;
  environment.isB2C = true;
  environment.isAWCcasino = true;
  environment.isAuracasino = true;
  environment.addagentnewform = true;
  environment.isdailyreport = true;
  environment.isparlay = false;
  // environment.oldAdmin = true;
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
else if (hostname.indexOf('cricexch') > -1) {
  environment.siteName = 'cricExch';
}
else if (hostname.indexOf('exchdiamond') > -1) {
  environment.siteName = 'exchDiamond';
}
else if (hostname.indexOf('exchlotus') > -1) {
  environment.siteName = 'exchlotus';
}
else if (hostname.indexOf('betswiz.com') > -1) {
  environment.siteName = 'betswiz';
  environment.isFirstTimePassword = false;
  environment.currency = '';
  environment.timeFormat = '+0530';
  environment.isparlay = false;
  environment.isDiamondReport = true;
}
else if (hostname.indexOf('betswiz.in') > -1) {
  environment.siteName = 'betswiz';
  environment.isFirstTimePassword = false;
  environment.currency = '';
  environment.timeFormat = '+0530';
  environment.isparlay = false;
  environment.isDiamondReport = true;
}
else if (hostname.indexOf('skyfaire.live') > -1) {
  environment.siteName = 'Skyfaire';
  environment.oldAdmin = true;
  // environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isRental = true;
  environment.isDiamondReport = true;
  environment.isShoweye = true;
  environment.bankingrefersh = false;
  environment.transferdelay = true,
    environment.domainMap = [
      // { id: 2, name: 'sat-sport.live' },
      // { id: 3, name: 'bigwine.live' },
    ];
}
else if (hostname.indexOf('weexch666.com') > -1) {
  environment.siteName = 'weexch666';
  environment.origin = 'weexch666.com';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isRental = true;
  environment.settlemettab = true;
  environment.captcha = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isAuracasino = true;
  environment.isDiamondReport = true;
  environment.showalllevellock = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = false;
  environment.isBlockmarket = false;
}
else if (hostname.indexOf('betskyexchange.com') > -1) {
  environment.captcha = false;
  environment.siteName = 'betskyexchange';
  environment.origin = 'betskyexchange.com';
  environment.isPremiumSite = true;
  environment.isDiamondReport = true;
  environment.isEditexpo = true;
  environment.isparlay = false;
}
else if (hostname.indexOf('panel.betskyexch.com') > -1) {
  environment.siteName = 'betskyexch';
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isPremiumSite = true;
  environment.isRental = true;
  environment.isDiamondReport = true;
  // environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showiframepanel = true;
  environment.isBlockmarket =false;
}
else if (hostname.indexOf('betskyexch.com') > -1) {
  environment.siteName = 'betskyexch';
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isPremiumSite = true;
  environment.isRental = true;
  environment.isDiamondReport = true;
  // environment.isparlay = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = false;
}
else if (hostname.indexOf('bajimatbdt.com') > -1) {
  environment.siteName = 'bajimatsite';
  environment.oldAdmin = true;
  //environment.hidesetting = false;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  // environment.islanguage = true;
  environment.isSkyFancy = true;
  environment.isDiamondReport = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
}
else if (hostname.indexOf('skybet369.co') > -1) {
  environment.siteName = 'skybet369';
  environment.isFirstTimePassword = false;
  environment.isparlay = false;
  environment.isBlockmarket = false;
  environment.isisSocialTabb2c = false;
}
else if (hostname.indexOf('9betexch.com') > -1) {
  environment.siteName = 'betexch9';
  environment.origin = '9betexch.com';
  environment.isPremiumSite = true;
  environment.transferdelay = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.captcha = false;
  environment.isAWCcasino = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('skybet365.in') > -1) {
  environment.siteName = 'skybet365';
  environment.settlemettab = true;
  environment.isDiamondReport = true;
  environment.siteswiseshowmmtab = true;
  environment.bankingrefersh = false;
}
else if (hostname.indexOf('skyexch999.in') > -1) {
  environment.siteName = 'skyexch999';
  environment.settlemettab = true;
  environment.isSettingAllow = true;
  environment.isDiamondReport = true;
  environment.siteswiseshowmmtab = true;
  environment.bankingrefersh = false;
}
else if (hostname.indexOf('kheloyari.com') > -1) {
  environment.siteName = 'kheloyari';
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.bankingrefersh = false;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('sports365.pro') > -1) {
  environment.siteName = 'sports365';
  environment.origin = 'sports365.pro';
  environment.emran_MM_setting = true;
  environment.isAWCcasino = true;
  environment.transferdelay = true;
  environment.isSharing = true;
  environment.captcha = false;
  environment.isFirstTimePassword = false;
  environment.showpopticker = true;
  environment.isEmlevel = true;
  environment.emran_MM_setting = true;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  // environment.isCreadref = true;
  environment.isBlockmarket = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('bigwine.live') > -1) {
  environment.siteName = 'bigwine';
  environment.isBdlevel = true;
  environment.origin = 'bigwine.live';
  environment.isDiamondReport = true;
  // environment.showpopticker = true;
  environment.SubDomainPack = true;

}

else if (hostname.indexOf('skyexch.live') > -1) {
  environment.siteName = 'skyexchh';
  environment.origin = 'skyexch.live';
  environment.captcha = false;
  environment.isDiamondReport = true;
}

else if (hostname.indexOf('jeesky7.com') > -1) {
  environment.siteName = 'jeesky7';
  environment.origin = 'jeesky7.com';
  environment.captcha = false;
  environment.settlemettab = true;
  environment.bankingrefersh = false;
  environment.isDiamondReport = true;
}
else if (hostname.indexOf('rajbet.win') > -1) {
  environment.siteName = 'rajbet';
  environment.origin = 'rajbet.win';
  environment.emran_MM_setting = true;
  environment.transferdelay = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isSharing = true;
  environment.captcha = false;
  environment.isbetgame = true;
  environment.isEmlevel = true;
  environment.isBOcasino = true;
  environment.isSkyFancy = true;
  environment.whatsapp = '+447417483162';
  environment.isSkyFancy = true;
  environment.emran_MM_setting = true;
  // environment.isCreadref = true;
  environment.isBlockmarket = true;
  environment.riskdropdown = false
  environment.isshowpass = true;
  // environment.domainMap = [
  //   { id: 1, name: 'sports365.pro' },
  //   { id: 2, name: 'citybett.com' },
  //   { id: 4, name: 'velkii.vip' },

  // ];
}
else if (hostname.indexOf('easy24.live') > -1) {
  environment.siteName = 'easy24';
  environment.origin = 'easy24.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isBdlevel = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.isShoweye = true;
  environment.addagentform = true;
}

else if (hostname.indexOf('bazipbu.com') > -1) {
  environment.siteName = 'bazipbu';
  environment.origin = 'bazipbu.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.transferdelay = true;
  environment.captcha = true;
  environment.commissionlevel = true;
  environment.isparlay = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.isCreadref=true;
  environment.isBlockmarket=true;
  // environment.domainMap = [
  //   { id: 0, name: 'bazipbu.bet' },
  // ];
}
else if (hostname.indexOf('bazipbu.bet') > -1) {
  environment.siteName = 'bazipbu';
  environment.origin = 'bazipbu.bet';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isShoweye = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.transferdelay = true;
  environment.captcha = true;
  environment.commissionlevel = true;
  environment.isparlay = true;
  environment.isCreadref=true;
  environment.isBlockmarket=true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('velkii.vip') > -1) {
  environment.siteName = 'velkiivip';
  environment.origin = 'velkii.vip';
  environment.isFirstTimePassword = false;
  environment.emran_MM_setting = true;
  environment.isRental = true;
  environment.isbetgame = true;
  environment.captcha = false;
  environment.isAWCcasino = true;
  environment.isEmlevel = true;
  // environment.showMM = true;
  environment.isBOcasino = true;
  environment.emran_MM_setting = true;
  environment.isSkyFancy = true;
  // environment.isCreadref = true;
  environment.isBlockmarket = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('1wicket.vip') > -1) {
  environment.siteName = 'wicket1';
  environment.origin = '1wicket.vip';
  environment.isbetgame = true;
  environment.isFirstTimePassword = false;
  environment.oldAdmin = true;
  environment.isSharing = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isEditexpo = true;
  environment.SubDomainPack = true;

}
else if (hostname.indexOf('baaji365.site') > -1) {
  environment.siteName = 'baaji365';
  environment.origin = 'baaji365.site';
  //environment.hidesetting = false;
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 0, name: 'velkiex365.win' },
  //   { id: 1, name: 'velkiex123.win' },
  //   { id: 2, name: 'crxw.live' },
  // ];
}

else if (hostname.indexOf('baajiex.site') > -1) {
  environment.siteName = 'baaji365';
  environment.origin = 'baajiex.site';
  //environment.hidesetting = false;
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;
  environment.showaccountdetailsAD = true;
  // environment.domainMap = [
  //   { id: 0, name: 'velkiex365.win' },
  //   { id: 1, name: 'velkiex123.win' },
  //   { id: 2, name: 'crxw.live' },
  // ];
}
else if (hostname.indexOf('bajiex123.live') > -1) {
  environment.siteName = 'bajiex123';
  environment.origin = 'bajiex123.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;

}
else if (hostname.indexOf('baaji365.in') > -1) {
  environment.siteName = 'baaji365in';
  environment.origin = 'baaji365.in';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true; 
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.Downlinesetting = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('baaji365.co') > -1) {
  environment.siteName = 'baaji365co';
  environment.origin = 'baaji365.co';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.Downlinesetting = true
  environment.socialmediasection = false;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('bestbaji365.live') > -1) {
  environment.siteName = 'bestbaji365';
  environment.origin = 'bestbaji365.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isbetgame = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 0, name: 'velki8.live' },
  // ]
}
else if (hostname.indexOf('bw25.live') > -1) {
  environment.siteName = 'bestbaji365';
  environment.origin = 'bw25.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isbetgame = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 0, name: 'velki8.live' }
  // ]
}
else if (hostname.indexOf('bw247.live') > -1) {
  environment.siteName = 'bestbaji365';
  environment.origin = 'bw247.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isbetgame = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 0, name: 'velki8.live' }
  // ]
}
else if (hostname.indexOf('bdbaji.live') > -1) {
  environment.siteName = 'bestbaji365';
  environment.origin = 'bdbaji.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isbetgame = true;
  environment.showaccountdetailsAD = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 0, name: 'velki8.live' }
  // ]
}

else if (hostname.indexOf('baaji365.love') > -1) {
  environment.siteName = 'baaji365biz';
  environment.isBajilogin = true;
  environment.origin = 'baaji365.love';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isSkyFancy = true;
  environment.showpopticker = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('baaji365x.live') > -1) {
  environment.siteName = 'baaji365x';
  environment.isBajilogin = true;
  environment.origin = 'baaji365x.live';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('batbuzz365.live') > -1) {
  environment.siteName = 'batbuzz365live';
  environment.origin = 'batbuzz365.live';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('giogiobetbuzz.com') > -1) {
  environment.siteName = 'batbuzz365live';
  environment.origin = 'giogiobetbuzz.com';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('bettbuzz365.com') > -1) {
  environment.siteName = 'bettbuzz365';
  environment.origin = 'bettbuzz365.com';
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
}
else if (hostname.indexOf('star365.live') > -1) {
  environment.siteName = 'star365';
  environment.origin = 'star365.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isEmlevel = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('velkiex365.win') > -1) {
  environment.siteName = 'velkii365';
  environment.origin = 'velkiex365.win';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isBajilogin = true;
  environment.isAWCcasino = true;
  environment.isFirstTimePassword = false;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('velkii365.live') > -1) {
  environment.siteName = 'velkii365';
  environment.origin = 'velkii365.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isFirstTimePassword = false;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('velkiex123.win') > -1) {
  environment.siteName = 'velkiex123win';
  environment.origin = 'velkiex123.win';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isAWCcasino = true;
  environment.isBajilogin = true;
  environment.isbetgame = true;
  environment.isFirstTimePassword = false;
  environment.showpopticker = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('velkii.co') > -1) {
  environment.siteName = 'velkii';
  environment.origin = 'velkii.co';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.islanguage = true;
  environment.isEditexpo = true;
  environment.domainMap = [];
  environment.isBOcasino = true;
  environment.isisSocialTabb2c = true;

}
else if (hostname.indexOf('betxbet.bet') > -1) {
  environment.siteName = 'betxbet';
  environment.origin = 'betxbet.bet';
  environment.isPremiumSite = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.oldAdmin = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('betxwin.bet') > -1) {
  environment.siteName = 'betxwin';
  environment.origin = 'betxwin.bet';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isShoweye = true;
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = false;
}
else if (hostname.indexOf('tusky.life') > -1) {
  environment.siteName = 'tuskylife';
  environment.origin = 'tusky.life';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = false;
  environment.Downlinesetting = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('0wickets.live') > -1) {
  environment.siteName = 'wickets0';
  environment.origin = '0wickets.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.captcha = false;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isEditexpo = true;
  environment.isShoweye = true;
  environment.siteswiseshowmmtab = false;
  environment.domainMap = [
    // { id: 0, name: '9baaji.live' },
    // { id: 1, name: 'bettbuzz365.com' },
  ];
}


else if (hostname.indexOf('9wickts.win') > -1) {
  environment.siteName = 'wickts9';
  environment.origin = '9wickts.win';
  environment.isFirstTimePassword = false;
  environment.isSharing = true;
  environment.isSkyFancy = true;
  environment.captcha = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.oldAdmin = true;
  environment.addagentform = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
}
else if (hostname.indexOf('bwin365.vip') > -1) {
  environment.siteName = 'bwin365vip';
  environment.origin = 'bwin365.vip';
  environment.isFirstTimePassword = false;
  environment.captcha = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.captcha = true;
  environment.Downlinesetting = true;
}
else if (hostname.indexOf('megabets.live') > -1) {
  environment.siteName = 'megabetslive';
  environment.origin = 'megabets.live';
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('megabets.biz') > -1) {
  environment.siteName = 'megabetslive';
  environment.origin = 'megabets.biz';
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('mathaexchall.com') > -1) {
  environment.siteName = 'mathaexchall';
  environment.captcha = false;
  environment.origin = 'mathaexchall.com';
  environment.oldAdmin = true;
  environment.isRental = true;
  environment.isDiamondReport = true;
}
else if (hostname.indexOf('3wickets.bet') > -1) {
  environment.siteName = 'wickets3';
  environment.origin = '3wickets.bet';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  // environment.islanguage = true;
  environment.isBOcasino = true,
    environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isEditexpo = true;
  environment.SubDomainPack = true;
  // environment.domainMap = [{ id: 0, name: 'velki123.com' }];
}
else if (hostname.indexOf('velki123.com') > -1) {
  environment.siteName = 'velki123';
  environment.origin = 'velki123.com';
  environment.oldAdmin = true;
  environment.isBajilogin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.Downlinesetting = true;
  environment.isBdlevel = true;
  // environment.islanguage = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;

}
else if (hostname.indexOf('velkie365.live') > -1) {
  environment.siteName = 'velkie365';
  environment.origin = 'velkie365.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isBajilogin = true;
  environment.isBOcasino = true;
  environment.captcha = true;
  environment.showaccountdetailsAD = true;
  environment.isparlay = true;
  environment.Downlinesetting = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('velki.app') > -1) {
  environment.siteName = 'velkiex123';
  environment.origin = 'velki.app';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isBajilogin = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 1, name: '9ex365.bet' },
  //   { id: 3, name: 'baaji365.love' },
  //   // { id: 7, name: 'velki123.com' },
  //   { id: 5, name: '9wicfast.com' },
  //   { id: 6, name: 'betxbet.bet' },
  //   { id: 7, name: 'velkie365.live' },
  //   // { id: 8, name: 'bwin365.vip' },
  //   { id: 9, name: 'bajighor.com' },
  //   { id: 10, name: 'baaji365.co' },
  //   { id: 11, name: 'baaji365.in' },


  // ];
}


else if (hostname.indexOf('bajimat.live') > -1) {
  environment.siteName = 'bajimat';
  environment.origin = 'bajimat.live';
  //environment.hidesetting = false;
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  // environment.islanguage = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 3, name: 'baazi365.co' },
  //   { id: 4, name: '3wickets.io' },
  //   { id: 6, name: 'betbuzz.biz' },
  //   { id: 7, name: 'baaaji365.live' },
  //   { id: 9, name: 'lc247.click' },
  //   { id: 10, name: 'velkii365.live' },
  //   { id: 13, name: 'bazi360.live' },
  //   { id: 14, name: 'maza246.live' },
  //   { id: 15, name: 'baaji365x.live' },
  //   { id: 16, name: 'batbuzz365.live' },
  //   { id: 17, name: 'baaji7.com' },
  //   { id: 19, name: 'tenx.win' },
  //   { id: 20, name: 'baaji365.vip' },
  //   { id: 21, name: 'giogiobetbuzz.com' },
  // ];
}
else if (hostname.indexOf('lc247.click') > -1) {
  environment.siteName = 'lc247vip';
  environment.origin = 'lc247.click';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.islanguage = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.isBlockmarket = true
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('baazi365.co') > -1) {
  environment.siteName = 'Baazi365';
  environment.origin = 'baazi365.co';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('3wickets.io') > -1) {
  environment.siteName = 'wickets3io';
  environment.origin = '3wickets.io';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('betbuzz.biz') > -1) {
  environment.siteName = 'Betbuzz365fun';
  environment.origin = 'betbuzz.biz';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
}
else if (hostname.indexOf('baaaji365.live') > -1) {
  environment.siteName = 'Baaaji365';
  environment.origin = 'baaaji365.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('baaji7.com') > -1) {
  environment.siteName = 'Baaaji365';
  environment.origin = 'baaji7.com';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('9ex365.bet') > -1) {
  environment.siteName = 'ex3659';
  environment.origin = '9ex365.bet';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isBdlevel = true;
  // environment.islanguage = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.showpopticker = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('cricbuzzer.com') > -1) {
  environment.siteName = 'cricbuzzercom';
  environment.origin = 'cricbuzzer.com';
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isRental = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.riskdropdown = false;

}
else if (hostname.indexOf('1xbet247.live') > -1) {
  environment.siteName = 'xbet247';
  environment.origin = '1xbet247.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.socialmediasection = true;
  //environment.hidesetting = false;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isSkyFancy = true;
  environment.isbetgame = true;
  environment.isBOcasino = true;
  environment.justToday = true;
  environment.isEditexpo = true;
  environment.transferdelay = true;
  environment.showbankstatus = true;
  environment.bankingrefersh = true;
  environment.AWCresult = true;
  environment.isparlay = true;
  environment.PwdActivityRP = true;
  environment.domainMap = [
    // { id: 1, name: 'gameex.live' },
  ];
}
else if (hostname.indexOf('1xbet247.bet') > -1) {
  environment.siteName = 'xbet247';
  environment.origin = '1xbet247.bet';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.socialmediasection = true;
  //environment.hidesetting = false;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isSkyFancy = true;
  environment.isbetgame = true;
  environment.isBOcasino = true;
  environment.justToday = true;
  environment.isEditexpo = true;
  environment.transferdelay = true;
  environment.showbankstatus = true;
  environment.bankingrefersh = true;
  environment.PwdActivityRP = true;
  environment.domainMap = [
  ];
}

else if (hostname.indexOf('1xbet247.casino') > -1) {
  environment.siteName = 'xbet247';
  environment.origin = '1xbet247.casino';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  //environment.hidesetting = false;
  environment.socialmediasection = true;
  //environment.hidesetting = false;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isSkyFancy = true;
  environment.isbetgame = true;
  environment.isBOcasino = true;
  environment.justToday = true;
  environment.isEditexpo = true;
  environment.transferdelay = true;
  environment.showbankstatus = true;
  environment.bankingrefersh = true;
  environment.PwdActivityRP = true;
  environment.domainMap = [
  ];
}

else if (hostname.indexOf('betguru.win') > -1) {
  environment.siteName = 'betguru';
  environment.origin = 'betguru.win';
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isPremiumSite = true;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.socialmediasection = false;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.commissionlevel =true;
}
else if (hostname.indexOf('betguru.live') > -1) {
  environment.siteName = 'betguru';
  environment.origin = 'betguru.live';
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isPremiumSite = true;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.socialmediasection = false;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.commissionlevel =true;
}

else if (hostname.indexOf('citybett.com') > -1) {
  environment.siteName = 'citybett';
  environment.origin = 'citybett.com';
  environment.emran_MM_setting = true;
  environment.captcha = true;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isFirstTimePassword = false;
  environment.isRental = true;
  environment.showpopticker = true;
  environment.isEmlevel = true;
  // environment.showMM = true;
  environment.isBOcasino = true;
  // environment.isCreadref = true;
  environment.isBlockmarket = true;
  environment.emran_MM_setting = true;
  environment.isSkyFancy = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('9xbet.win') > -1) {
  environment.siteName = 'betx9';
  environment.origin = '9xbet.win';
  environment.isFirstTimePassword = false;
  environment.captcha = true;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.isSkyFancy = true;
  environment.isBOcasino = true;
  environment.Downlinesetting = true;
  environment.domainMap = [
    // { id: 1, name: 'bajjiwala.live' },
   
  ];

}
else if (hostname.indexOf('9xbet.biz') > -1) {
  environment.siteName = 'betx9';
  environment.origin = '9xbet.biz';
  environment.isFirstTimePassword = false;
  environment.captcha = true;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.isEditexpo = true;
  environment.isSkyFancy = true;
  environment.isBOcasino = true;

}
else if (hostname.indexOf('winbuzz365.bet') > -1) {
  environment.siteName = 'winbuzz365';
  environment.origin = 'winbuzz365.bet';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = true;
  environment.isSkyFancy = true;
  environment.isFirstTimePassword = false;
  environment.Downlinesetting = true;
  environment.domainMap = [
    // { id: 1, name: 'betx365.in' },
    // { id: 2, name: 'bets3.win' },

    // { id: 4, name: 'bagi365.live' },
    // { id: 2, name: 'velki9.bet' },
    // { id: 6, name: 'icc365.co' },
  ];
}


else if (hostname.indexOf('bagi365.live') > -1) {
  environment.siteName = 'skybet247';
  environment.origin = 'bagi365.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true,
  environment.captcha = false;
  environment.isSkyFancy = true;
  environment.isFirstTimePassword = false;
  environment.Downlinesetting = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('betx365.in') > -1) {
  environment.siteName = 'betx365';
  environment.origin = 'betx365.in';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = false;
  environment.isSkyFancy = true;
  environment.isFirstTimePassword = false;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.Downlinesetting = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('betx7.win') > -1) {
  environment.siteName = 'betx7';
  environment.origin = 'betx7.win';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.addagentform = true;
  environment.isbetgame = true;
  // environment.domainMap = [
  //   { id: 0, name: 'betx7.pro' },
  //   { id: 1, name: 'tusky.fit' },
  //   { id: 2, name: 'bigwin.fit' },
  //   { id: 3, name: 'bajiex123.live' },
  //   { id: 4, name: 'luckybuzz.win' },
  //   { id: 5, name: 'betx365.me' },
  //   { id: 6, name: 'cricbuzz365.biz' },
  //   { id: 7, name: 'wincric.vip' },
  // ];
}
else if (hostname.indexOf('betx7.pro') > -1) {
  environment.siteName = 'betx7pro';
  environment.origin = 'betx7.pro';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('tusky.fit') > -1) {
  environment.siteName = 'tuskyfit';
  environment.origin = 'tusky.fit';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('ninewiickets.com') > -1) {
  environment.siteName = 'ninewiickets';
  environment.origin = 'ninewiickets.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.whatsapp = '+16464700338';
  environment.whatsapp1 = '+12083665044';
}
else if (hostname.indexOf('ninewickets.com') > -1) {
  environment.siteName = 'ninewiickets';
  environment.origin = 'ninewickets.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.whatsapp = '+16464700338';
  environment.whatsapp1 = '+12083665044';
}
else if (hostname.indexOf('adminak.com') > -1) {
  environment.siteName = 'ninewiickets';
  environment.origin = 'adminak.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.whatsapp = '+16464700338';
  environment.whatsapp1 = '+12083665044';
}
else if (hostname.indexOf('ninewickets.site') > -1) {
  environment.siteName = 'ninewiickets';
  environment.origin = 'ninewickets.site';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.whatsapp = '+16464700338';
  environment.whatsapp1 = '+12083665044';
}
else if (hostname.indexOf('sat-sport.live') > -1) {
  environment.siteName = 'satsport';
  environment.origin = 'sat-sport.live';
  environment.oldAdmin = true;
  environment.isRental = true;
  environment.isBdlevel = true;
  environment.isDiamondReport = true;
  environment.socialmediasection = false;
  // environment.showpopticker = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('luckybuzz.win') > -1) {
  environment.siteName = 'luckybuzz';
  environment.origin = 'luckybuzz.win';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('vrnlexch.com') > -1) {
  environment.captcha = false;
  environment.isFirstTimePassword = false;
  environment.siteName = 'vrnlexch';
  environment.origin = 'vrnlexch.com';
  environment.isDiamondReport = true;
  environment.isProduction = false;
  environment.settlemettab = true;
  environment.bankingrefersh = false;
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.islanguage = true;
  environment.addagentnewform = true;
  environment.isSocialTab = true;
  environment.isparlay = true;
  environment.oldAdmin = true;
  environment.showagetlist = true;
  environment.vrnlb2c = true;
  environment.isisSocialTabb2c = true;
 

  // environment.domainMap = [
  //   { id: 1, name: 'world7777.net' },
  //   { id: 2, name: 'kheloyari.com' },
  //   { id: 5, name: 'babu365.com' },
  //   { id: 6, name: 'bookiees.com' },
  //   { id: 7, name: 'cxwelcome.live' },
  //   { id: 8, name: 'skyexch.run' },
  //   { id: 9, name: 'velki.fun' },
  // ];
}
else if (hostname.indexOf('4wickets.com') > -1) {
  environment.siteName = 'wickets4';
  environment.isFirstTimePassword = false;
  environment.isparlay = false;
  environment.isBlockmarket = false;
  environment.isisSocialTabb2c = false;
}
else if (hostname.indexOf('bety247.com') > -1) {
  environment.siteName = 'bety247';
  environment.origin = 'bety247.com';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('bety247.live') > -1) {
  environment.siteName = 'bety247live';
  environment.origin = 'bety247.live';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showagetlist = false;
  environment.isisSocialTabb2c = true;

}
else if (hostname.indexOf('bety247.bet') > -1) {
  environment.siteName = 'bety247bet';
  environment.origin = 'bety247.bet';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showagetlist = true;
  environment.isisSocialTabb2c = true;
  
}
else if (hostname.indexOf('sportbuzz365.bet') > -1) {
  environment.siteName = 'sportbuzz365';
  environment.origin = 'sportbuzz365.bet';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isbetgame = true;
  environment.isEditexpo = true;
  environment.isisSocialTabb2c = true;
  // environment.domainMap = [
  //   { id: 0, name: 'lalbaji.live' },
  //   { id: 1, name: 'lalbaji.bet' },
  // ];
}

else if (hostname.indexOf('pbu365.com') > -1) {
  environment.siteName = 'sportbuzz365';
  environment.origin = 'pbu365.com';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isbetgame = true;
  environment.isEditexpo = true;
  // environment.domainMap = [
  //   { id: 0, name: 'lalbaji.live' },
  //   { id: 1, name: 'lalbaji.bet' },
  // ];
}

else if (hostname.indexOf('9wicfast.com') > -1) {
  environment.siteName = 'wicfast9';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBajilogin = true;
  environment.isEditexpo = true;
  environment.isBOcasino = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('starsport.pro') > -1) {
  environment.siteName = 'starsport';
  environment.isPremiumSite = true;
  environment.isAnalysisFlag = true;
  environment.riskdropdown = false;
  // environment.oldAdmin = true;
  environment.emran_MM_setting = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBajilogin = true;
  environment.isBOcasino = true;
  environment.isEmlevel = true;
  environment.isSharing = true;
  environment.transferdelay = true;
  environment.isEditexpo = true;
  environment.emran_MM_setting = true;
  environment.isSkyFancy = true;
  // environment.isCreadref = true;
  environment.isBlockmarket = true;
  environment.isisSocialTabb2c = true;
  environment.isshowpass = true;


}

else if (hostname.indexOf('skyexch.run') > -1) {
  environment.siteName = 'skyexchrun';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.SubDomainPack = true;
}


else if (hostname.indexOf('city247.live') > -1) {
  environment.siteName = 'city247';
  environment.oldAdmin = true;
  environment.captcha = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isBajilogin = true;
  environment.isPremiumSite = true;
  environment.isClientpass = true;
  environment.showpopticker = true;
  environment.isisSocialTabb2c = true;

}
else if (hostname.indexOf('city247.bet') > -1) {
  environment.siteName = 'city247';
  environment.captcha = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isBajilogin = true;
  environment.isisSocialTabb2c = true;

}
else if (hostname.indexOf('tenx.win') > -1) {
  environment.siteName = 'tenx';
  environment.captcha = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('baaji365.vip') > -1) {
  environment.siteName = 'bajipro365';
  environment.captcha = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('baji365.vip') > -1) {
  environment.siteName = 'bajipro365';
  environment.captcha = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.addagentform = true;
}
else if (hostname.indexOf('gameex.live') > -1) {
  environment.siteName = 'gameex';
  environment.origin = 'gameex.live';
  environment.captcha = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.isbetgame = true;
  environment.isparlay = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('moza247.com') > -1) {
  environment.siteName = 'moza247';
  environment.origin = 'moza247.com';
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.isparlay = false;
}
else if (hostname.indexOf('crxw.live') > -1) {
  environment.siteName = 'crxw';
  environment.origin = 'crxw.live';
  environment.captcha = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.addagentform = true;
  environment.isisSocialTabb2c = true
  environment.SubDomainPack = true;
}

//play25//
else if (hostname.indexOf('panel.play786.live') > -1) {  // jio panel 
  environment.siteName = 'play25';
  environment.origin = 'play786.live';
  environment.isFirstTimePassword = false;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isbetgame = true;
  environment.addagentnewform = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isShoweye = true;
  environment.isparlay = true;
  environment.justToday = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showbankstatus = true;
  environment.bankingrefersh = true;
  environment.onlyjio25 = true;
  environment.onlyShowpanel = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
  environment.isBlockmarket =false;
}
else if (hostname.indexOf('play786.live') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'play786.live';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('panel.bee25.live') > -1) {  // jio panel 
  environment.siteName = 'play25';
  environment.origin = 'bee25.live';
  environment.isFirstTimePassword = false;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isbetgame = true;
  environment.addagentnewform = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isSkyFancy = true;
  environment.isShoweye = true;
  environment.isparlay = true;
  environment.justToday = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showbankstatus = true;
  environment.bankingrefersh = true;
  environment.onlyjio25 = true;
  environment.onlyShowpanel = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
  environment.isBlockmarket =false;
}
else if (hostname.indexOf('bee25.live') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'bee25.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.beebanking = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('plabon25.com') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'plabon25.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('play786.com') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'play786.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('casino25.online') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'casino25.online';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('casino25.live') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'casino25.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('play25.live') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'play25.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.AWCresult = true;
  environment.justToday = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
  environment.showagetlist = true;
  // environment.domainMap = [
  //   { id: 0, name: 'lotus25.live' },
  // ];
}
else if (hostname.indexOf('play25.games') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'play25.games';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isBdlevel = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('play25.win') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'play25.win';
  environment.isBdlevel = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.isBdlevel = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
else if (hostname.indexOf('play25.bet') > -1) {
  environment.siteName = 'play25';
  environment.origin = 'play25.bet';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBdlevel = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.justToday = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.play25SummReport = true;
}
//play25 end//

else if (hostname.indexOf('lotus25.live') > -1) {
  environment.siteName = 'lotus25';
  environment.origin = 'lotus25.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isBdlevel = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.bankingrefersh = true;
  environment.isShoweye = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.AWCresult = true;
  environment.justToday = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.SubDomainPack = true;

}

//jio25//
else if (hostname.indexOf('plabon25.live') > -1) {
  environment.siteName = 'jio25';
  environment.origin = 'plabon25.live';
  environment.isFirstTimePassword = false;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isbetgame = true;
  environment.addagentnewform = true;
  environment.isPremiumSite = true;
  environment.isEmlevel = true;
  environment.isSkyFancy = true;
  environment.isShoweye = true;
  environment.isparlay = true;
  environment.justToday = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.showbankstatus = true;
  environment.bankingrefersh = true;
  environment.showskyerromsg = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
}

else if (hostname.indexOf('team11.bet') > -1) {
  environment.siteName = 'jio25';
  environment.origin = 'team11.bet';
  environment.isFirstTimePassword = false;
  environment.oldAdmin = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  //environment.hidesetting = false;
  environment.isbetgame = true;
  environment.addagentnewform = true;
  environment.isPremiumSite = true;
  environment.isEmlevel = true;
  environment.isSkyFancy = true;
  environment.isShoweye = true;
  environment.isparlay = true;
  environment.justToday = true;
  environment.isBOcasino = true;
  // environment.showMM = true;
  environment.isEditexpo = true;
  environment.showbankstatus = true;
  environment.bankingrefersh = true;
  environment.showskyerromsg = true;
  environment.isSummaryreport = true;
  environment.onlyjio25 = true;
  environment.AWCresult = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.isisSocialTabb2c = true;

}
//jio25 end//

else if (hostname.indexOf('bigwin.fit') > -1) {
  environment.siteName = 'bigwinfit';
  environment.origin = 'bigwin.fit';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('bets3.win') > -1) {
  environment.siteName = 'bets3win';
  environment.origin = 'bets3.win';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true,
  environment.captcha = false;
  environment.isSkyFancy = true;
  environment.isFirstTimePassword = false;
  environment.isShoweye = true;
  environment.Downlinesetting = true;
}
else if (hostname.indexOf('betx365.me') > -1) {
  environment.siteName = 'betx365me';
  environment.origin = 'betx365.me';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.addagentform = true;
  environment.isShoweye = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('velki8.live') > -1) {
  environment.siteName = 'velki8';
  environment.origin = 'velki8.live';
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;  
  environment.isbetgame = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('cricbuzz365.biz') > -1) {
  environment.siteName = 'cricbuzz365';
  environment.origin = 'cricbuzz365.biz';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.socialmediasection = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;  
  environment.isbetgame = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('wincric.vip') > -1) {
  environment.siteName = 'wincricvip';
  environment.origin = 'wincric.vip';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;  
  environment.isbetgame = true;
  environment.addagentform = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('lalbaji.live') > -1) {
  environment.siteName = 'lalbaji';
  environment.origin = 'lalbaji.live';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.isEditexpo = true;
  environment.isShoweye = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('lalbaji.bet') > -1) {
  environment.siteName = 'lalbaji';
  environment.origin = 'lalbaji.bet';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.oldAdmin = true;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.isEditexpo = true;
  environment.isShoweye = true;
}
else if (hostname.indexOf('bajighor.com') > -1) {
  environment.siteName = 'bajighor';
  environment.origin = 'bajighor.com';
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.oldAdmin = true;
  environment.Downlinesetting = true;
  environment.isBOcasino = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('plabon.live') > -1) {
  environment.siteName = 'plabon';
  environment.origin = 'plabon.live';
  // environment.transferdelay = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isBOcasino = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
  environment.bankingrefersh = false;
  environment.isstraighthierarchy = true;
  environment.isjio22 = true;
  environment.jio22level = true;
  environment.whatsapp = '+16463578139';
}


else if (hostname.indexOf('bajifair.live') > -1) {
  environment.siteName = 'bajifair';
  environment.origin = 'bajifair.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isSkyFancy = true;
  environment.isbetgame = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
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
else if (hostname.indexOf('skyx247.com') > -1) {
  environment.siteName = 'skyx247';
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isPremiumSite = true;
  environment.isRental = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('skyex247.live') > -1) {
  environment.siteName = 'skyex247';
  environment.origin = 'skyex247.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.addagentnewform = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.transferdelay = true,
  environment.bankingrefersh = false;
  environment.isjio22 = true;
  environment.isisSocialTabb2c = true;
  environment.isstraighthierarchy  = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
}
else if (hostname.indexOf('mostvipgame.live') > -1) {
  environment.siteName = 'mostvipgame';
  environment.isAWCcasino = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isSkyFancy = true;
  environment.isEditexpo = true;
}
else if (hostname.indexOf('icc365.co') > -1) {
  environment.siteName = 'icc365';
  environment.origin = 'icc365.co';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = false;
  environment.isSkyFancy = true;
  environment.isBajilogin = true;
  environment.isFirstTimePassword = false;
}
else if (hostname.indexOf('foxplay.pro') > -1) {
  environment.siteName = 'foxplay';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.isparlay = true;
  environment.isCreadref = true;
  environment.isBlockmarket = true;
  environment.isSkyreoprs=true;
  environment.showskyerromsg=true;
  environment.isstraighthierarchy = true
  environment.addagentnewform =true
  environment.isEditexpo =true,
  environment.isLifetimePL = true,
  environment.foxplayrisk = true,
  environment.skyriskmanagemeny = true,
  environment.isskystatus = true
}
else if (hostname.indexOf('giorgiobetbuzz.bet') > -1) {
  environment.siteName = 'giorgiobetbuzz';
  environment.isBdlevel = true;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.isstraighthierarchy = true;
  environment.showbettab = true;
  environment.betgamelevel = true;
  environment.showbetserrormsg = true;
  environment.isCallreport = true;
  environment.isBOcasino = true;
  environment.isEditexpo = true;
  environment.isparlay = true;
  environment.showaccountdetailsAD = true;
  // environment.domainMap = [
  //   { id: 0, name: 'veelki.live' },
  // ];
}
else if (hostname.indexOf('ninewickets.live') > -1) {
  environment.siteName = 'ninewicketslive';
  environment.origin = 'ninewickets.live';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isBOcasino = true;
}
else if (hostname.indexOf('bet247.bet') > -1) {
  environment.siteName = 'bet247';
  environment.origin = 'bet247.bet';
  environment.isFirstTimePassword = false;
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.captcha = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isbetgame = true;
  environment.isEditexpo = true;
  environment.addb2bform = true;
  environment.isstraighthierarchy = true;
}
else if (hostname.indexOf('betx365.gold') > -1) {
  environment.siteName = 'betx365gold';
  environment.origin = 'betx365.gold';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = false;
  environment.Downlinesetting = true;
  // environment.domainMap = [
  //   { id: 0, name: 'tusky.life' },
  //   { id: 1, name: 'bigwinn.buzz' },
  //   { id: 2, name: 'baaji.World' },
  // ];
}

else if (hostname.indexOf('baaji.world') > -1) {
  environment.siteName = 'baajiworld';
  environment.origin = 'baaji.world';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = false;
  environment.Downlinesetting = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('bigwinn.buzz') > -1) {
  environment.siteName = 'bigwinnbuzz';
  environment.origin = 'bigwinn.buzz';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isBdlevel = true;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = false;
  environment.Downlinesetting = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('bajjiwala.live') > -1) {
  environment.siteName = 'bajjiwala';
  environment.origin = 'bajjiwala.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.socialmediasection = false;
  environment.isFirstTimePassword = false;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.Downlinesetting = true;
  environment.isisSocialTabb2c = true;
  environment.SubDomainPack = true;
}
else if (hostname.indexOf('rio247.live') > -1) {
  environment.siteName = 'rio247';
  environment.origin = 'rio247.live';
  environment.isPremiumSite = true;
  environment.isAWCcasino = true;
  environment.isbetgame = true;
  environment.isBOcasino = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
}

else if (hostname.indexOf('velkiclub.com') > -1) {
  environment.siteName = 'velkiclub';
  environment.origin = 'velkiclub.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  environment.bankingrefersh = false;
  environment.isjio22 = true;
  environment.isisSocialTabb2c = true;
  environment.isstraighthierarchy  = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.betgamelevel = true;
  environment.isBajilogin = true;
  environment.showpopticker = true;
  environment.isBlockmarket = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('heppni247.com') > -1) {
  environment.siteName = 'velkiclub';
  environment.origin = 'heppni247.com';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.socialmediasection = true;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  environment.showskyerromsg = true;
  environment.isCallreport = true;
  environment.isparlay = true;
  environment.isEditexpo = true;
  environment.showaccountdetailsAD = true;
  // environment.transferdelay = true,
  environment.bankingrefersh = false;
  environment.isjio22 = true;
  environment.isisSocialTabb2c = true;
  environment.isstraighthierarchy  = true;
  environment.PwdActivityRP = true;
  environment.UserNamefield = true;
  environment.betgamelevel = true;
  environment.isBajilogin = true;
  environment.SubDomainPack = true;
}

else if (hostname.indexOf('bigbaji.live') > -1) {
  environment.siteName = 'bigbajilive';
  environment.origin = 'bigbaji.live';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.Downlinesetting = true;
  environment.isCreadref = true;

}
else if (hostname.indexOf('velkibd.pro') > -1) {
  environment.siteName = 'velkibd';
  environment.origin = 'velkibd.pro';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.captcha = true;
  environment.isFirstTimePassword = false;
  environment.isisSocialTabb2c = true;
  environment.isBajilogin = true;
  environment.isbetgame = true;

}
else if (hostname.indexOf('velki9.bet') > -1) {
  environment.siteName = 'velki9';
  environment.origin = 'velki9.bet';
  environment.oldAdmin = true;
  environment.isPremiumSite = true;
  environment.isBdlevel = true;
  environment.isAWCcasino = true;
  environment.isBOcasino = true;
  environment.isFirstTimePassword = false;
  environment.isisSocialTabb2c = true;
  environment.Downlinesetting = true;
  environment.isShoweye= true;
  environment.SubDomainPack = true;

}
else if (hostname.indexOf('9wicketspro.vip') > -1) {
  environment.siteName = 'wicketspro9';
  environment.origin = '9wicketspro.vip';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  // environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isisSocialTabb2c = true;
  environment.captcha = true;
  environment.addb2bform = true;
}
else if (hostname.indexOf('ninewickets.pro') > -1) {
  environment.siteName = 'wicketspro9';
  environment.origin = 'ninewickets.pro';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  // environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isisSocialTabb2c = true;
  environment.captcha = true;
  environment.addb2bform = true;
}
else if (hostname.indexOf('9wicketss.pro') > -1) {
  environment.siteName = 'wicketspro9';
  environment.origin = '9wicketss.pro';
  environment.isPremiumSite = true;
  environment.oldAdmin = true;
  environment.isFirstTimePassword = false;
  environment.isbetgame = true;
  environment.isSkyFancy = true;
  environment.isAWCcasino = true;
  environment.isshowpass = true;
  // environment.betgamelevel = true;
  environment.isBOcasino = true;
  environment.isBdlevel = true;
  environment.isisSocialTabb2c = true;
  environment.captcha = true;
  environment.addb2bform = true;
}

// else if (hostname.indexOf('bigbaji.win') > -1) {
//   environment.siteName = 'bigbajilive';
//   environment.origin = 'bigbaji.win';
//   environment.oldAdmin = true;
//   environment.isPremiumSite = true;
//   environment.isBdlevel = true;
//   environment.isAWCcasino = true;
//   environment.isBOcasino = true;
//   environment.captcha = true;
//   environment.isFirstTimePassword = false;
//   environment.Downlinesetting = true;

// }
// else if (hostname.indexOf('bigbaji.buzz') > -1) {
//   environment.siteName = 'bigbajilive';
//   environment.origin = 'bigbaji.buzz';
//   environment.oldAdmin = true;
//   environment.isPremiumSite = true;
//   environment.isBdlevel = true;
//   environment.isAWCcasino = true;
//   environment.isBOcasino = true;
//   environment.captcha = true;
//   environment.isFirstTimePassword = false;
//   environment.Downlinesetting = true;
// }
console.log(environment.siteName);
