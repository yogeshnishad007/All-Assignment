document.getElementById('talk-to-us').addEventListener('click', function() {
    alert("ok")
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('country-code').value;
    const mobile = document.getElementById('mobile').value;
    
    // console.log(email,mobile)
    
    localStorage.setItem('details', JSON.stringify({"email":email,"countryCode":countryCode,"mobile":mobile}));

    window.location.href = 'thankyou.html';
});
