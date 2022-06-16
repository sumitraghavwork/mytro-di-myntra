let login_status = JSON.parse(localStorage.getItem('loginStatus')) || false

// login_status check to add signIn/logout function starts here
if (login_status == true) {
  document.getElementById('login_Status').innerHTML = ''

  let user_Name = document.createElement('div')
  let avatar = document.createElement('img')
  avatar.setAttribute(
    'src',
    'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
  )
  avatar.setAttribute('class', 'wth')
  user_Name.append(avatar)

  let logOff = document.createElement('div')
  logOff.innerText = 'Log Out'
  logOff.addEventListener('click', logout)

  let cartLogo = document.createElement('div')
  cartLogo.innerText = 'Bag'
  cartLogo.addEventListener('click', function () {
    // add anchor tag here
    window.location.href = ''
  })

  document.getElementById('login_Status').append(user_Name, logOff, cartLogo)
} else {
  document.getElementById('login_Status').innerHTML = ''
  let signIn = document.createElement('div')
  signIn.innerText = 'Sign In'
  signIn.addEventListener('click', function () {
    // add anchor here
    window.location.href = 'signin.html'
  })
  let signUp = document.createElement('div')
  signUp.innerText = 'Sign Up'
  signUp.addEventListener('click', function () {
    // add anchor here
    window.location.href = 'signup.html'
  })
  document.getElementById('login_Status').append(signIn, signUp)
}
function logout() {
  localStorage.setItem('loginStatus', false)
  window.location.reload()
}
// login_status check to add signIn/logout function ends here

//products page linking starts here
let products_page = document.querySelectorAll('#products_page>div')
products_page.forEach(function (ele) {
  ele.addEventListener('click', verifyLogin)
})
function verifyLogin() {
  if (login_status == true) {
    let selected = event.target.innerText
    if (selected == 'MEN') {
      // add anchor here
      window.location.href = ''
    } else if (selected == 'WOMEN') {
      // add anchor here
      window.location.href = ''
    } else if (elected == 'KIDS') {
      // add anchor here
      window.location.href = ''
    } else {
      // add anchor here
      window.location.href = ''
    }
  } else {
    alert('Please Login First')
    // add anchor here
    window.location.href = ''
  }
}
// products_page linking ends

// logo route to homePage
function homePage() {
  window.location.href = 'index.html'
}
// logo route to homePage ends here
