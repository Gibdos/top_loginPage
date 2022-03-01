const pwdPara = document.querySelector("#pwd-p");
const pwdConfirmPara = document.querySelector("#pwd-confirm-p");
const pwd = document.querySelector("#password");
const pwdConfirm = document.querySelector("#pwdconfirm");
const pwdReg =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i;

pwdConfirm.addEventListener("keyup", () => {
	if (pwdConfirm.value != pwd.value) {
		pwdConfirmPara.innerHTML = "The passwords don't match.";
	} else {
		pwdConfirmPara.innerHTML = "&nbsp;";
	}
});

pwd.addEventListener("keyup", () => {
	if (!pwdReg.test(pwd.value)) {
		pwdPara.innerHTML = `The password must be<br /> 
        at least 8 char long<br />
        contain 1 uppercase character<br />
        contain 1 symbol`;
	} else {
		pwdPara.innerHTML = "&nbsp;";
	}
});
