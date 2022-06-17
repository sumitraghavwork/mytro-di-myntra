document.querySelector("form").addEventListener("submit",goForOTP)


function goForOTP(event){
    event.preventDefault();
   //  console.log(event)
   let usrCardNo=document.querySelector("#CardNo").value;
   let usrName=document.querySelector("#NameOnCard").value;
   let usrCVV=document.querySelector("#Cvv").value;
   let usrDOE=document.querySelector("#Doe").value;
   // let Otp=document.createElement("div");
   if(usrCardNo==123456781234 && usrName=="Sumit Raghav" && usrCVV==123 &&  usrDOE=="2023/01/01" ){
       // let Otp=document.createElement("div");
       //      Otp.innerHTML=`<a href="OTP.html"></a>`
       alert("Authentification Successful !")
       window.location.href="OTP.html"
           // document.querySelector("button").append(Otp)
   }
   else if(usrCardNo==123456781234 && usrName=="Yash Bhatter" && usrCVV==123 &&  usrDOE=="2023/01/01" ){
       alert("Authentification Successful !")
       window.location.href="OTP.html"
   }
   else if(usrCardNo==123456781234 && usrName=="Nikhil Magar" && usrCVV==123 &&  usrDOE=="2023/01/01" ){
       alert("Authentification Successful !")
       window.location.href="OTP.html"
   }
   else if(usrCardNo==123456781234 && usrName=="G. Nirmal Kumar" && usrCVV==123 &&  usrDOE=="2023/01/01" ){
       alert("Authentification Successful !")
       window.location.href="OTP.html"
   }
   else if(usrCardNo==123456781234 && usrName=="Piyush Gupta" && usrCVV==123 &&  usrDOE=="2023/01/01" ){
       alert("Authentification Successful !")
       window.location.href="OTP.html"
   }
   else{
       alert("WRONG CREDENTIALS!")
   }
}