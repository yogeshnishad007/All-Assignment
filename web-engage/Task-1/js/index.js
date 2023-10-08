document.getElementById('talk-to-us').addEventListener('click', function() {
    alert("ok")
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('country-code').value;
    const mobile = document.getElementById('mobile').value;
    const errorMsg = document.querySelector('.error-msg')
    
    console.log("len",mobile.length)
    // console.log(email,mobile)

    errorMsg.textContent = ""; 

    if (!email && !mobile) {
        const err = "Please fill out all fields. ";
        errorMsg.textContent = err;
    }

    if (!email) {
        const err = "Please enter a valid email address. ";
        errorMsg.textContent = err;
    }
    
    if (!countryCode) {
        const err = "Please select a country code. ";
        errorMsg.textContent = err;
    }

    if(mobile.length < 10) {
        const err = "Mobile Number should be at least 10 digits.";
        errorMsg.textContent = err;
    } 
    
   

    if (email && countryCode && mobile.length >= 10) {
        localStorage.setItem('details', JSON.stringify({"email":email,"countryCode":countryCode,"mobile":mobile}));
        window.location.href = 'thankyou.html';
    }
    
});
