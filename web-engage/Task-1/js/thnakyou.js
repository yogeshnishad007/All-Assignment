document.addEventListener('DOMContentLoaded', function() {
    
    
    const emailDisplay = document.getElementById('display-email');
    const mobileDisplay = document.getElementById('display-mobile');
  

    const retrievedObj = localStorage.getItem('details');
    const {email,mobile,countryCode}= JSON.parse(retrievedObj);

    // console.log(email,mobile)
    
    emailDisplay.textContent =   email;
    mobileDisplay.textContent = `${countryCode}-${mobile}`;
   
});
