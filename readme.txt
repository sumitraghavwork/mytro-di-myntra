Team Members:
G.Nirmal Kumar	fw19_0074	
Nikhil Magar	fw19_0139	
Sumit Raghav	fw19_0809	
Yash Bhatter	fw19_0188	
Piyush Kumar	fw19_0701	
Nimish Subhedar	fw19_0632

						
home page	signup/signIn	mens	    womens	    kids	    home & living	cart and payment and otp
sumit	    yash	        nirmal	    piyush	    sumit	        nikhil	            nikhil + yash

Use this key for cartarr/cartData:-
let cararr=JSON.parse(localstorage.getitem("cartData"))
Localstorage.setitem("cartData",JSON.strigify(cartarr))

add this login functionality for login page:-
let login_status = localStorage.getItem('loginStatus') || 'false'
localStorage.setItem('loginStatus', login_status)


products page data:

mensPage
let mensData=[
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp',
    name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
    price: 1170,
    strikedoffprice: 2599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp',
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp',
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp',
    name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
    price: 399,
    strikedoffprice: 799,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp',
    name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
    price: 1620,
    strikedoffprice: 3599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FV7329/reebok_FV7329_1.jpg.plp ',
    name: " MEN'S REEBOK RUNNING ASTRO BOOSTER SHOES ",
    price: 1440,
    strikedoffprice: 3199,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ',
    name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
    price: 1999,
    strikedoffprice: 3199,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ',
    name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
    price: 769,
    strikedoffprice: 1099,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GP7180/reebok_GP7180_1.jpg.plp',
    name: "MEN'S REEBOK TRAINING WORKOUT  TEE  ",
    price: 1299,
    strikedoffprice: 1440,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EX3924/reebok_EX3924_1.jpg.plp ',
    name: "MEN'S REEBOK SUPER SOFT FLIP SLIPPERS",
    price: 699,
    strikedoffprice: 999,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FW0343/reebok_FW0343_1.jpg.plp ',
    name: "MEN'S REEBOK RUNNING RUN SHOES  ",
    price: 1620,
    strikedoffprice: 3599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EX4285/reebok_EX4285_1.jpg.plp ',
    name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
    price: 1620,
    strikedoffprice: 3599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FV9519/MEN_SWIM_SLIPPERS_FV9519_1.jpg.plp ',
    name: "MEN'S REEBOK SWIM RUSSLE FLIP SLIPPERS  ",
    price: 599,
    strikedoffprice: 999,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ',
    name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
    price: 1575,
    strikedoffprice: 3499,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-H00024/reebok_H00024_1.jpg.plp ',
    name: 'UNISEX REEBOK RUNNING ZIG KINETICA II SHOES  ',
    price: 9999,
    strikedoffprice: 12000,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK9170/reebok_GK9170_1.jpg.plp ',
    name: " MEN'S REEBOK TRAINING BAS POLO TEE ",
    price: 779,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp',
    name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
    price: 1019,
    strikedoffprice: 1699,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ',
    name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
    price: 1019,
    strikedoffprice: 1699,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ',
    name: " MEN'S REEBOK RUNNING TREND SHOES",
    price: 1575,
    strikedoffprice: 3499,
    brand: 'Addidas'
  },
  {
    image_url: ' https://content.shop4reebok.com/static/Product-G57776/reebok_G57776_1.jpg.plp ',
    name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
    price: 3499,
    strikedoffprice: 4999,
    brand: 'Reebok'
  },
  {
    image_url: ' https://content.shop4reebok.com/static/Product-FV9555/MEN_SWIM_SLIPPERS_FV9555_1.jpg.plp  ',
    name: "MEN'S REEBOK SWIM ULTRA FLIP SLIPPERS   ",
    price: 749,
    strikedoffprice: 1499,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EX3994/reebok_EX3994_1.jpg.plp   ',
    name: "  MEN'S REEBOK SWIM FLEX CONNECT SANDALS ",
    price: 1149,
    strikedoffprice: 2299,
    brand: 'Reebok'
  },
  {
    image_url: ' https://content.shop4reebok.com/static/Product-EX4287/reebok_EX4287_1.jpg.plp  ',
    name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
    price: 1620,
    strikedoffprice: 3599,
    brand: 'Addidas'
  },
  {
    image_url: ' https://content.shop4reebok.com/static/Product-GK9180/reebok_GK9180_1.jpg.plp  ',
    name: " MEN'S REEBOK TRAINING RUNNER SHORTS  ",
    price: 779,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: ' https://content.shop4reebok.com/static/Product-HB5732/reebok_HB5732_1.jpg.plp  ',
    name: ' MEN REEBOK CLASSICS TRACKSUIT HOODIE  ',
    price: 3499,
    strikedoffprice: 4999,
    brand: 'Addidas'
  },
  {
    image_url: ' https://content.shop4reebok.com/static/Product-HB5733/reebok_HB5733_1.jpg.plp  ',
    name: "MEN'S REEBOK CLASSIC TRACKSUIT GOLF HOODIE   ",
    price: 3499,
    strikedoffprice: 4999,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FQ5364/reebok_FQ5364_1.jpg.plp   ',
    name: ' UNISEX REEBOK TRAINING ACTIVE  BAG ',
    price: 1399,
    strikedoffprice: 2799,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FW0318/reebok_FW0318_1.jpg.plp ',
    name: " MEN'S REEBOK RUNNING TREND RUNNER SHOES",
    price: 1575,
    strikedoffprice: 3499,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp',
    name: 'UNISEX REEBOK CLASSICS  BASKETBALL SHOES',
    price: 3919,
    strikedoffprice: 5599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp',
    name: "MEN'S REEBOK RUNNING RUN FUSION  SHOES",
    price: 1620,
    strikedoffprice: 3599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-EX4272/reebok_EX4272_1.jpg.plp',
    name: "MEN'S REEBOK RUNNING QUICK DRIFTER SHOES",
    price: 1620,
    strikedoffprice: 3599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-H02293/reebok_H02293_1.jpg.plp',
    name: "MEN'S REEBOK DYNAMIC ZIGZAG SHOES",
    price: 7599,
    strikedoffprice: 9999,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FV9551/MEN_SWIM_SLIPPERS_FV9551_1.jpg.plp',
    name: "MEN'S REEBOK SWIM SUPERSOFT FLIP SLIPPERS",
    price: 909,
    strikedoffprice: 1299,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-HC3528/reebok_HC3528_1.jpg.plp',
    name: "MEN'S REEBOK TRAINING ACTIVE BASIC POLO TEE",
    price: 779,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-HF3794/reebok_HF3794_01.JPG.plp ',
    name: "MEN'S REEBOK TRAINING ACTIVE MOVE TEE ",
    price: 1749,
    strikedoffprice: 2499,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-HG5456/reebok_HG5456_1.jpg.plp',
    name: "MEN'S REEBOK FITNESS TRAINING  SWEATSHIRT",
    price: 1079,
    strikedoffprice: 1799,
    brand: 'Reebok'
  }
];

womensPage
 let womensData=[
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp',
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp',
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp',
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC TIGHTS",
    price: 1099,
    strikedoffprice: 1249,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp',
    name: 'UNISEX REEBOK SHOW SHOES',
    price: 1249,
    strikedoffprice: 1489,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S CLASSIC REEBOK PANTS",
    price: 1459,
    strikedoffprice: 1235,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
    price: 849,
    strikedoffprice: 2599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
    price: 1550,
    strikedoffprice: 2599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
    price: 1399,
    strikedoffprice: 6599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp',
    name: 'UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM',
    price: 949,
    strikedoffprice: 1899,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp',
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp',
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp',
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC TIGHTS",
    price: 1099,
    strikedoffprice: 1249,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp',
    name: 'UNISEX REEBOK SHOW SHOES',
    price: 1249,
    strikedoffprice: 1489,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S CLASSIC REEBOK PANTS",
    price: 1459,
    strikedoffprice: 1235,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
    price: 849,
    strikedoffprice: 2599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
    price: 1550,
    strikedoffprice: 2599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
    price: 1399,
    strikedoffprice: 6599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp',
    name: 'UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM',
    price: 949,
    strikedoffprice: 1899,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp',
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp',
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp',
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC TIGHTS",
    price: 1099,
    strikedoffprice: 1249,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp',
    name: 'UNISEX REEBOK SHOW SHOES',
    price: 1249,
    strikedoffprice: 1489,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S CLASSIC REEBOK PANTS",
    price: 1459,
    strikedoffprice: 1235,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
    price: 849,
    strikedoffprice: 2599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
    price: 1550,
    strikedoffprice: 2599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
    price: 1399,
    strikedoffprice: 6599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp',
    name: 'UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM',
    price: 949,
    strikedoffprice: 1899,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp',
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp',
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp',
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC TIGHTS",
    price: 1099,
    strikedoffprice: 1249,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp',
    name: 'UNISEX REEBOK SHOW SHOES',
    price: 1249,
    strikedoffprice: 1489,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S CLASSIC REEBOK PANTS",
    price: 1459,
    strikedoffprice: 1235,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
    price: 849,
    strikedoffprice: 2599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
    price: 1550,
    strikedoffprice: 2599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
    price: 1399,
    strikedoffprice: 6599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp',
    name: 'UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM',
    price: 949,
    strikedoffprice: 1899,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp',
    name: "WOMEN'S REEBOK PRINT LEGGINGS ",
    price: 1549,
    strikedoffprice: 1799,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp',
    name: "WOMEN'S REEBOK POLYTIGHT",
    price: 1249,
    strikedoffprice: 1749,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp',
    name: "WOMEN'S REEBOK SLEEVE TEE",
    price: 699,
    strikedoffprice: 1245,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp',
    name: "WOMEN'S REEBOK PP TIGHTS",
    price: 749,
    strikedoffprice: 1299,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC LEGGINGS",
    price: 1399,
    strikedoffprice: 2799,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK CLASSIC TIGHTS",
    price: 1099,
    strikedoffprice: 1249,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp',
    name: 'UNISEX REEBOK SHOW SHOES',
    price: 1249,
    strikedoffprice: 1489,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp',
    name: "WOMEN'S CLASSIC REEBOK PANTS",
    price: 1459,
    strikedoffprice: 1235,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",
    price: 849,
    strikedoffprice: 2599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp',
    name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",
    price: 1550,
    strikedoffprice: 2599,
    brand: 'Addidas'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp',
    name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",
    price: 1399,
    strikedoffprice: 6599,
    brand: 'Reebok'
  },
  {
    image_url: 'https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp',
    name: 'UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM',
    price: 949,
    strikedoffprice: 1899,
    brand: 'Addidas'
  }
];

paymentsPage Card-Data:
let cardData={
        card_number:"123456781234",
        cvv:"123",
        expiry:"2023-01-01"
}

common classes

.striked {
        text-decoration: line-through;
        color: gray;
        margin-left: 10px;
}