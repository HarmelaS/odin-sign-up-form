// Confirms that passwords match

function passConfirm() {
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('confirm-password').value;
    let passwordBox1 = document.getElementById('password');
    let passwordBox2 = document.getElementById('confirm-password');
    let noMatch = document.getElementById('noMatch')

    if (pass1 !== pass2) {
        
        passwordBox1.classList.add('invalid');
        passwordBox2.classList.add('invalid');
        noMatch.innerText = "passwords do not match";
    }
    else {

        alert("Submitted!");
        passwordBox1.classList.remove('invalid');
        passwordBox2.classList.remove('invalid');
        noMatch.innerText = "";
    }
}