exports.registrationSheet = function (name, approvedUrl,disApprovedUrl,todate, fromdate){
  return `
  <html xmlns="https://www.w3.org/1999/xhtml" class="gr__newsletters-2017-sivanmyc_c9users_io"><head>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=display-width, initial-scale=1.0, maximum-scale=1.0,">
    <title>Registration Successful</title>
    <style>	html { width: 100%; }
      body {margin:0; padding:0; width:100%; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
      img {display:block !important; border:0; -ms-interpolation-mode:bicubic;}
      .ReadMsgBody { width: 100%;}
      .ExternalClass {width: 100%;}
      .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
      .MsoNormal {font-family: open sans;}
      p {margin:0 !important; padding:0 !important;}
      .images {display:block !important; width:100% !important;}
      .display-button td, .display-button a  {font-family: open sans;}
      .display-button a:hover {text-decoration:none !important;}
      /* MEDIA QUIRES */
      @media only screen and (min-width:799px)
      {
      .saf-table {
      display:table !important;
      }
      .main-width {
      width:600px;
      }
      .width800 {
      width:800px !important;
      max-width:800px !important;
      }
      }
      @media only screen and (max-width:799px)
      {
      body {width:auto !important;}
      .display-width {width:100% !important;}	
      .display-width-inner {width:600px !important;}	
      .padding { padding:0 20px !important; }	
      .res-padding-full { padding:0px !important; }
      .res-padding-right{padding-right: 0px !important;}
      .width800 {
      width:100% !important;
      max-width:100% !important;
      }
      }
      @media only screen and (max-width:768px)
      {	
      .width768{
      max-width:684px !important;
      }
      .child1-width{
      width:56% !important;
      max-width:56% !important;
      }
      .child2-width{
      width:44% !important;
      max-width:44% !important;
      }
      .full-width-height
      { 	
      padding-top:50px !important;
      padding-bottom:50px !important;
      }
      }
      @media only screen and (max-width:680px)
      {	
      .child1-width{
      width:50% !important;
      max-width:50% !important;
      }
      .child2-width{
      width:50% !important;
      max-width:50% !important;
      }
      .res-padding-left{
      padding-left: 40px !important;
      }
      .res-padding-right{
      padding-right: 40px !important;
      }
      .padding-hide
      {	
      padding-bottom:0px !important;
      }
      .res-attract-height {
      padding: 20px 10px 0 10px !important;
      }
      .full-width-height
      { 	
      padding-top:30px !important;
      padding-bottom:25px !important;
      }
      }
      @media only screen and (max-width:660px)
      {
      .child1-width{
      width:50% !important;
      max-width:50% !important;
      }
      .child2-width{
      width:50% !important;
      max-width:50% !important;
      }
      .res-padding-left{
      padding-left: 30px !important;
      }
      .res-padding-right{
      padding-right: 30px !important;
      }
      .res-attract-height {
      padding: 20px 10px 0 10px !important;
      }
      .full-width-height
      { 	
      padding-top:25px !important;
      padding-bottom:25px !important;
      }
      }
      @media only screen and (max-width:640px)
      {
      .res-attract-height {
      padding: 20px 10px 0 10px !important;
      }
      .child1-width, .child2-width{
      width:50% !important;
      max-width:50% !important;
      }
      .res-padding-left{
      padding-left: 20px !important;
      }
      .res-padding-right{
      padding-right: 20px !important;
      }
      .full-width-height
      { 	
      padding-top:20px !important;
      padding-bottom:20px !important;
      }
      }
      @media only screen and (max-width:639px)
      {
      body {width:auto !important;}
      .display-width {width:100% !important;}
      .display-width-inner,  
      .display-width-child {width:100% !important;}
      .display-width-child .button-width .display-button {width:auto !important;}
      .res-padding-full { padding:0 20px !important; }
      .padding-hide{padding:0px !important;}
      .padding { padding:0 20px !important; }	
      .saf-table {
      display:block !important;
      }
      .width282 {
      width:282px !important;  
      }
      .div-width {				
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      }
      .res-height20-bottom { padding-bottom:20px !important;}
      .res-height-top { padding-top:60px !important;}
      .full-width-height { padding-bottom:60px !important;}
      .height10 {height:10px !important;}
      .height20 {height:20px !important;}
      .height30 {height:30px !important; line-height:30px !important;}
      .hide-height, .hide-bar {display:none !important;}
      .txt-center {text-align:center !important;}
      span.unsub-width {width:100% !important;
      display:block !important;}
      span.txt-copyright{ padding-bottom:10px !important;}
      .res-center{
      margin:0 auto !important;
      display:table !important;
      }
      }
      @media only screen and (max-width:480px) {
      .display-width table, .display-width-child2 table {width:100% !important;}
      .display-width .button-width .display-button {width:auto !important;}
      .display-width .width282 {
      width:282px !important;  
      }
      .div-width {				
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      }
      }
      @media only screen and (max-width:380px)
      {
      .display-width table {width:100% !important;}
      .display-width .button-width .display-button {width:auto !important;}
      .display-width-child .width282 { width:100% !important;}
      }
      @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic,800,800italic);
      html { width: 100%; }
      body {margin:0; padding:0; width:100%; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;}
      img {display:block !important; border:0; -ms-interpolation-mode:bicubic;}
      .ReadMsgBody { width: 100%;}
      .ExternalClass {width: 100%;}
      .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div { line-height: 100%; }
      .heading {font-family:Open Sans, Arial, Helvetica Neue, Helvetica, sans-serif !important;}
      .MsoNormal {font-family:'Open Sans', Arial, Helvetica Neue, Helvetica, sans-serif !important;}
      p {margin:0 !important; padding:0 !important;}
      a {font-family:'Open Sans', Arial, Helvetica Neue, Helvetica, sans-serif !important;}		
      .images {display:block !important; width:100% !important;}
      .display-button td, .display-button a {font-family:'Open Sans', Arial, Helvetica Neue, Helvetica, sans-serif !important;}
      .display-button a:hover {text-decoration:none !important;}
      .button {
      border: none;
      color: black;
      padding: 8px 10px;
      text-align: center;
      text-decoration: none;
      font-weight:600;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      -webkit-transition-duration: 0.4s; 
      transition-duration: 0s;
      cursor: pointer;
      }
      .button1 {
      background-color:#FFB6C1; 
      color: white; 
      font-family:open sans;
      }
      .button1:hover {
      background-color: #DB7093;
      color: white;
      }
      .button2 {
      background-color:#ef4048; 
      color: white; 
      font-family:open sans;
      border: 2px solid #ef4048
      }
      .button2:hover {
      background-color: rgba(0,0,0,0);
      color: white;
      }
      /* MEDIA QUIRES */
      @media only screen and (min-width: 641px) and (max-width: 800px)  
      {
      body {width:auto !important;}
      table[class=display-width] {width:100% !important;}	
      table[class=display-width-1] {width:49% !important;}
      table[class=display-width-2] {width:30px !important;}
      table[class=display-width-3] {width:70% !important;}				
      table[class=display-width-4] {width:560px !important;}
      table[class=display-width-5] {width:10px !important;}
      table[class=display-width-col] {width:279px !important;}
      table[class=menu-width] {width:25% !important;}
      table[class=menu-width-1] {width:auto !important;}
      td[class=hide-height-1] {display:none !important;}
      .txt-center{ text-align:center !important; }
      td[class=hide-height] {display:none !important;}
      td[class="hide-width"] { width:10px !important; }
      .res-height{ height:40px !important; }
      .res-bottom-height{ height:60px !important; }
      .stretch{width: 280px !important;}
      .price,.price-1 {width: 180px !important;}
      .price-2 {width:180px !important;}
      .friend {width: 193.5px !important;}
      }
      @media only screen and (min-width: 640px) and (max-width: 640px)  
      {
      table[class=display-width] {width:100% !important;}	
      table[class=display-width-1] {width:49% !important;}
      table[class=display-width-2] {width:30px !important;}
      table[class=display-width-3] {width:70% !important;}	
      table[class=display-width-4] {width:600px !important;}
      table[class=display-width-5] {width:30px !important;}
      table[class=display-width-col] {width:295px !important;}
      table[class=display-width-footer] {width:85% !important;}
      .padding {padding:0 5px !important;}
      table[class=menu-width] {width:25% !important;}
      table[class=menu-width-1] {width:auto !important;}
      td[class=hide-height-1] {display:none !important;}
      .txt-center{ text-align:center !important; }
      td[class=hide-height] {display:none !important;}
      td[class="hide-width"] { width:10px !important; }
      .res-height{ height:40px !important; }
      .res-bottom-height{ height:60px !important; }
      .stretch{width: 280px !important;}
      .logo{width:299px !important;}
      .logo1{width:295px !important;}
      .price,.price-1 {width: 180px !important;}
      .price-2 {width:180px !important;}
      .friend {width: 193.5px !important;}
      }
      @media only screen and (max-width:639px)
      {
      body {width:auto !important;}
      table[class=display-width] {width:100% !important;}	
      table[class=display-width-1] {width:100% !important;}
      table[class=display-width-2] {width:100% !important;}
      table[class=display-width-3] {width:100% !important;}
      table[class=display-width-4] {width:100% !important;}	
      table[class=display-width-col] {width:100% !important;}
      table[class=display-width-footer] {width:100% !important;}
      table[class=menu-width] {width:100% !important;}
      table[class=menu-width-1] {width:100% !important;}
      td[class="height-hidden"] {display:none !important;}
      td[class="height60"] {height:60px !important;}
      td[class="height30"] {height:30px !important;}
      .textcenter {text-align:center !important;}
      .imagecenter {margin:0 auto !important;}
      .logo{width:280px !important;}
      .logo1{width:280px !important;}
      .stretch{width: 275px !important;}
      .price {width: 100% !important;}
      .price-1 {width: 100% !important;}
      .price-2 {width: 180px !important;}
      }
      @media only screen and (max-width:480px)
      {
      table[class=display-width] table {width:100% !important;}
      table[class=display-width] .button-width .display-button {width:auto !important;}
      td[class=height-hidden] {display:none !important;}	
      table[class=display-width] .logo {width:280px !important;}
      table[class=display-width] .logo1 {width:280px !important;}
      table[class=display-width] .log {width:83% !important;}
      table[class=display-width] .price-1 {width: 100% !important;}
      table[class=display-width] .price-2 {width: 180px !important;}
      }
      @media only screen and (max-width:350px)
      {
      .fs {font-size:12px !important;}
      table[class=display-width] .blog{font-size:10px !important;}
      }
      @media only screen and (max-width:339px)
      {
      table[class=display-width] .logo{width:100% !important;}
      table[class=display-width] .logo1{width:100% !important;}
      table[class=display-width] .logo-height-1{height: 37px !important;}
      table[class=display-width] .butn{font-size:9px !important}
      .logo2 img 
      {
      width: 100% !important;
      }
      }
      @media only screen and (max-width:300px)
      {
      table[class=display-width] .logo{width: 240px !important;}
      table[class=display-width] .logo-height{height: 18px !important;}
      table[class=display-width-footer] {width:100% !important;}
      }
    </style>
  </head>
  <body marginwidth="0" marginheight="0" style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" offset="0" topmargin="0" leftmargin="0" data-gr-c-s-loaded="true">
    <table align="center" bgcolor="#cdcdcd" border="0" cellpadding="0" cellspacing="0" width="100%" data-module="View In Browser" data-bgcolor="Main BG" class="">
      <tbody>
       <tr>
          <td align="center">
            <table class="display-width" data-bgcolor="Section BG-1" width="700" cellspacing="0" cellpadding="0" border="0" bgcolor="#00aae7" align="center">
              <tbody>
                <tr>
                  <td height="5"></td>
                </tr>
              </tbody>
            </table>
            </td>
        </tr>
      </tbody>
    </table>
    <table align="center" bgcolor="#cdcdcd" border="0" cellpadding="0" cellspacing="0" width="100%" data-module="Menu" data-bgcolor="Main BG" class="">
      <tbody>
        <tr>
          <td align="center">
            <!-- ID:BG MENU -->
            <table align="center" bgcolor="#232527" border="0" cellpadding="0" cellspacing="0" class="display-width" width="700" data-bgcolor="Menu BG">
              <tbody>
                <tr>
                  <td align="center" class="res-padding">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="600">
                      <tbody>
                        <tr>
                          <td height="5"></td>
                        </tr>
                        <tr>
                          <td>
                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="25%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:auto;">
                              <tbody>
                                <tr>
                                  <td align="center">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:auto !important;">
                                      <tbody>
                                        <tr>
                                          <td height="05"></td>
                                        </tr>
                                        <tr>
                                          <!-- ID:TXT MENU -->
                                          <td align="center" valign="middle" style="line-height:50px; font-size:0;">
                                            <a href="#" style="color:#666666; text-decoration:none;" data-color="Menu"> </a><a href="https://www.miraclesoft.com/" target="blank"> <img src="https://www.miraclesoft.com/images/newsletters/Q2/miracle-logo-light.png" alt="150x50" width="150" height="auto" style="margin:0; border:0; padding:0; display:block;"></a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="1" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;">
                              <tbody>
                                <tr>
                                  <td height="10" width="1">
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <table align="right" border="0" cellpadding="0" cellspacing="0" class="display-width-child" width="29%" style="border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; width:auto;">
                              <tbody>
                                        <tr>
                                          <td height="10"></td>
                                        </tr>
<tr>
                                          <td align="center">
                                            <table style="width:auto !important;" cellspacing="0" cellpadding="0" border="0" align="center">
                                              <tbody>
                                                <tr>
                                                  <td valign="middle" align="center">
                                                    <a href="https://www.linkedin.com/company/miracle-software-systems-inc" target="blank"><img style="display:block;" width="30" heignt="30" src="https://d2b8lqy494c4mo.cloudfront.net/mss/images/newsletters/2018/February/linkedin-button.png" border="0" mc:edit="m171" editable="true" data-crop="false" label="Facebook" alt="Facebook"></a>
                                                  </td>
                                                  <td width="10">&nbsp;</td>
                                                  <td valign="middle" align="center">
                                                    <a href="https://www.instagram.com/team_mss/" target="blank"><img style="display:block;" width="30" heignt="30" src="https://d2b8lqy494c4mo.cloudfront.net/mss/images/newsletters/2019/February/instagram-light.png" border="0" mc:edit="m172" editable="true" data-crop="false" label="Google +" alt="Google +"></a>
                                                  </td>
                                                  <td width="10">&nbsp;</td>
                                                  <td valign="middle" align="center">
                                                    <a href="https://facebook.com/miracle45625" target="blank"><img style="display:block;" width="30" heignt="30" src="https://d2b8lqy494c4mo.cloudfront.net/mss/images/newsletters/2018/February/facebook-logo-button.png" border="0" mc:edit="m173" editable="true" data-crop="false" label="Instagram" alt="Instagram"></a>
                                                  </td>
                                                  <td width="10">&nbsp;</td>
                                                  
                                                  
                                                  <td valign="middle" align="center">
                                                    <a href="https://www.youtube.com/c/Team_MSS" target="blank"><img style="display:block;" width="30" heignt="30" src="https://d2b8lqy494c4mo.cloudfront.net/mss/images/newsletters/2018/February/youtube-logotype.png" border="0" mc:edit="m175" editable="true" data-crop="false" label="Twitter" alt="Twitter"></a>
                                                  </td>
                                                  <td width="10">&nbsp;</td>
                                                  <td valign="middle" align="center">
                                                    <a href="https://www.flickr.com/photos/team_miracle" target="blank"><img style="display:block;" width="30" heignt="30" src="https://d2b8lqy494c4mo.cloudfront.net/mss/images/newsletters/2018/February/flickr-circle-logo.png" border="0" mc:edit="m176" editable="true" data-crop="false" label="You Tube" alt="You Tube"></a>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td height="15"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    
<table align="center" bgcolor="#cdcdcd" border="0" cellpadding="0" cellspacing="0" width="100%" data-module="Header" data-bgcolor="Main BG" class="">
      <tbody>
        <tr>
          <td align="center">
            <!-- ID:BG HEADER OPTIONAL -->
            <table align="center" bgcolor="#f1f1f1" border="0" cellpadding="0" cellspacing="0" class="display-width" width="700" data-bgcolor="Header Optional BG">
              <tbody>
                <tr>
                  <td align="center" style="font-size:0;">
                    <div style="margin:auto;">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#f1f1f1" style="max-width: 700px;background-size: cover;background-repeat: no-repeat;">
                      <tbody>
                        <tr>
                          <td height="30px"></td>
                        </tr>
                        <tr>
                          <td align="center" style="padding: 0 30px;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="max-width: 600px;">
                              <tbody>
                                <tr>
                                  <td>
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="">
                                      <tbody>
                                        <tr>
                                          <td style="">
                                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center">
                                              <tbody>
                                                <tr>
                                                  <td height="5px"></td>
                                                </tr>
                                                <tr>
                                                  <td style="font-family:'Open Sans';font-size: 32px;line-height: 50px;font-weight: 600;color: #232527;" align="left">
                                                    <h4 style="margin: 0!important;">Weekly Timesheet for ${fromdate} to ${todate}&#33;</h4>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="5px"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td height="30px"></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    
    
    <table data-module="About Nature" data-bgcolor="Main BG" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#cdcdcd" align="center" class="">
      <tbody>
        <tr>
          <td align="center">
            <table class="display-width" data-bgcolor="Section BG-1" width="700" cellspacing="0" cellpadding="0" border="0" bgcolor="#ffffff" align="center">
              <tbody>
                
                


<tr>
                  <td style="padding:0 30px;" align="center">
                    <table class="display-width" width="600" cellspacing="0" cellpadding="0" border="0" align="center">
                      <tbody>
<tr>
                                  <td style="">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td height="30px"></td>
                                        </tr>
                                        <tr>
                                          <td style="text-align:left;font-family: 'Open Sans';font-size:16px;line-height: 25px;text-decoration: none;color: #232527;font-weight:400;">
                                            <b>Hello,
                                            </b>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td height="15px"></td>
                                        </tr>
                                        <tr>
                                          <td style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">Requesting for your approval on ${name} 's weekly timesheet.</td>
                                        </tr>
                                        <tr>
                                          <td height="15px"></td>
                                        </tr>
                                        <tr style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">
                                          <td>
                                            <div style="min-height: 10px; max-width: 500px;display: inline-block; padding: 10px; margin-bottom:2px; color: black;font-weight: bold">Sunday</div><div style="display: inline-block; padding-left:10px; font-weight: bold">0 </div>
                                          </td>
                                        </tr>
                                        <tr style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">
                                          <td>
                                            <div style="min-height: 10px; max-width: 500px;display: inline-block; padding: 10px; margin-bottom:2px; color: black;font-weight: bold">Monday</div><div style="display: inline-block; padding-left:10px; font-weight: bold">7 hours</div>
                                          </td>
                                        </tr>
                                        <tr style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">
                                          <td><div style="min-height: 15px; max-width: 500px;display: inline-block; padding: 10px; margin-bottom:2px; color: black;font-weight: bold">Tuesday</div><div style="display: inline-block; padding-left:10px; font-weight: bold">8 hours</div>
                                          </td>
                                        </tr>
                                        <tr style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">
                                          <td><div style="min-height: 15px; max-width: 500px;display: inline-block; padding: 10px; margin-bottom:2px; color: black;font-weight: bold">Wednesday</div><div style="display: inline-block; padding-left:10px; font-weight: bold">7.3 hours</div>
                                          </td>
                                        </tr>
                                        <tr style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">
                                          <td><div style="min-height: 15px; max-width: 500px;display: inline-block; padding: 10px; margin-bottom:2px; color: black;font-weight: bold">Thursday</div><div style="display: inline-block; padding-left:10px; font-weight: bold">8 hours</div>
                                          </td>
                                        </tr>
                                        <tr style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">
                                          <td><div style="min-height: 15px; max-width: 500px;display: inline-block; padding: 10px; margin-bottom:2px; color: black;font-weight: bold">Friday</div><div style="display: inline-block; padding-left:10px; font-weight: bold">7.5 hours</div>
                                          </td>
                                        </tr>
                                        <tr style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:500;">
                                          <td><div style="min-height: 15px; max-width: 500px;display: inline-block; padding: 10px; margin-bottom:2px; color: black;font-weight: bold">Saturday</div><div style="display: inline-block; padding-left:10px; font-weight: bold">0 </div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td height="15px"></td>
                                        </tr>
                                                                                                                    

<tr>
                                          <td>
                                            <a href="#" target="blank" style="text-decoration:none;">
                                              <table width="150px" align="left">
                                                <tbody>
                                                  <tr>
                                                    <td style="text-align:center;padding: 9px 20px;text-decoration:none;background-color: #00aae7;font-family:Open Sans;font-size: 17px;">
                                                    <a style="text-decoration: none;" href=${approvedUrl}><span style="color:#ffffff"><b>Approve</b></span></a>
                                                    </td>
                                                    <td style="text-align:center;padding: 9px 20px;text-decoration:none;background-color: #0000;font-family:Open Sans;font-size: 17px;"></td>
                                                    <td style="text-align:center;padding: 9px 20px;text-decoration:none;background-color: #f93434;font-family:Open Sans;font-size: 17px;">
                                                    <a style="text-decoration: none;" href=${disApprovedUrl}><span style="color:#ffffff"><b>Disapprove</b></span></a>
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </a>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td height="20px"></td>
                                        </tr>
                                        <tr>
                                          <td style="text-align:justify; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #ef4048; font-weight:500;">
                                            <multiline><i>&#42;Note: The above link will be active only for 15 days from today. </i></multiline>
                                          </td>
                                        </tr>
                                        <tr><td height="10px"></td></tr>
<tr>
                                          <td style="text-align:left; font-family: 'Open Sans'; font-size:15px; line-height: 25px; text-decoration: none; color: #232527; font-weight:400;">
                                            <multiline><b>Thanks &amp; Regards,</b>
       <br><b>Miracle Hubble Team</b> </multiline>
                                          </td>
                                        </tr><tr>
                                          <td height="30px"></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

              </tbody>
            </table>
           </td>
        </tr>
      </tbody>
    </table>
    <table data-module="Footer" data-bgcolor="Main BG" width="100%" cellspacing="0" cellpadding="0" border="0" bgcolor="#cdcdcd" align="center" class="">
      <tbody>
        <tr>
					<td align="center">
						<!-- ID:BG FOOTER BG -->
						<table align="center" bgcolor="#222222" border="0" cellpadding="0" cellspacing="0" class="display-width" width="100%" style="max-width:700px;" data-bgcolor="Footer BG">
								<tbody><tr>
									<td align="center" class="padding">
										
										<div style="display:inline-block;width:100%; max-width:700px; vertical-align:top;" class="main-width">
											<table align="center" border="0" cellpadding="0" cellspacing="0" class="display-width-inner" width="100%" style="max-width:700px;">
												<tbody><tr>
													<td height="10"></td>
												</tr>
												<tr>
                          <td class="MsoNormal" style="padding: 10px;color: #ffffff;font-family:Open Sans;font-size: 14px;line-height: 30px;" data-color="Content" data-size="Content" data-min="12" data-max="34" align="center">&#169; Copyrights 2019 | Miracle Software Systems, Inc.
</td>
                        </tr>
												<tr>
													<td height="10"></td>
												</tr>
											</tbody></table>
										</div>
										
									</td>
								</tr>
							</tbody></table>
					</td>
				</tr>
      </tbody>
    </table>
<table align="center" bgcolor="#cdcdcd" border="0" cellpadding="0" cellspacing="0" width="100%" data-module="View In Browser" data-bgcolor="Main BG" class="">
      <tbody>
       <tr>
          <td align="center">
            <table class="display-width" data-bgcolor="Section BG-1" width="700" cellspacing="0" cellpadding="0" border="0" bgcolor="#00aae7" align="center">
              <tbody>
                <tr>
                  <td height="5"></td>
                </tr>
              </tbody>
            </table>
            </td>
        </tr>
      </tbody>
    </table>
  </body></html>
  `

}

