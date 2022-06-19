Team Members:
G.Nirmal Kumar	fw19_0074	
Nikhil Magar	fw19_0139	
Sumit Raghav	fw19_0809	
Yash Bhatter	fw19_0188	
Piyush Kumar	fw19_0701	
Nimish Subhedar	fw19_0632

						Respective Pages Are Created By These Team Members.
Home Page	signup/signIn	    Mens	    Womens	    kids and Search bar	    Home & Living	Cart and payment and otp
sumit	            yash	   nirmal	    piyush	          sumit	               nikhil	            nikhil + yash

Use this key for cartarr/cartData:-
let cararr=JSON.parse(localstorage.getitem("cartData"))
Localstorage.setitem("cartData",JSON.strigify(cartarr))

Add this login functionality for login page:-
let login_status = localStorage.getItem('loginStatus') || 'false'
localStorage.setItem('loginStatus', login_status).


Payments Page Card-Data:
let cardData={
        card_number:"123456781234",
        cvv:"123",
}
