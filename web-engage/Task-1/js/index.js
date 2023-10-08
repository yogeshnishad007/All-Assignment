document.getElementById('talk-to-us').addEventListener('click', function() {
    alert("ok")
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('country-code').value;
    const mobile = document.getElementById('mobile').value;
    const errorMsg = document.querySelector('.error-msg')
    const  mail = document.getElementById("email").value;


    
     errorMsg.textContent = ""; 
     

    console.log("len",mobile.length)
    

        // var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
        var regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]{2,})(\.[a-z]{2,})?$/;

        if(!regx.test(mail)){

            const err = "Sorry! Incorrect Email ID";
            errorMsg.textContent = err;
            return
        }

    if (!email && !mobile) {
        const err = "Please fill out all fields. ";
        errorMsg.textContent = err;
        return
    }

    if (!email) {
        const err = "Please enter a valid email address. ";
        errorMsg.textContent = err;
    }
    
    if (!countryCode) {
        const err = "Please select a country code. ";
        errorMsg.textContent = err;
        return
    }

  
    if(mobile.length < 10) {
        const err = "Mobile Number should be at least 10 digits.";
        errorMsg.textContent = err;
        return
    } 
   

    if (email && countryCode && mobile.length >= 10) {
        localStorage.setItem('details', JSON.stringify({"email":email,"countryCode":countryCode,"mobile":mobile}));
        window.location.href = 'thankyou.html';
    }
    
});
