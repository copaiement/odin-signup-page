// client-side password validation

function verifyPwd() {
    let pwd = document.querySelector("#pwd").value;
    let pwdConfirm = document.querySelector("#pwd-confirm").value;
    const pwdRejectMsg = document.querySelector(".pwd-reject");

    if (pwd == "" || pwdConfirm == "") {
        pwdRejectMsg.textContent = "**Please enter a password";
        return false;
    } else if (pwd.length < 8) {
        pwdRejectMsg.textContent = "**Password is too short";
        return false;
    } else if (!/^[a-z\d]{8,}$/i.test(pwd)) {
        pwdRejectMsg.textContent = "**Please use 8 or more letters and numbers only"
        return false;
    } else if (pwd !== pwdConfirm) {
        pwdRejectMsg.textContent = "**Passwords do not match";
        return false;
    } else {
        return true;
    }
}
