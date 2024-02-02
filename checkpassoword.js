function checkPasswordStrength() {
    var password = document.getElementById("password").value;
    var strengthMeter = document.getElementById("strength-meter");
    var strengthLabel = document.getElementById("strength-label");

    // Check password strength
    var strength = 0;
    strength += (password.match(/[a-z]/) ? 1 : 0);
    strength += (password.match(/[A-Z]/) ? 1 : 0);
    strength += (password.match(/[0-9]/) ? 1 : 0);
    strength += (password.match(/[$@$!%*?&]/) ? 1 : 0);

    // Update strength meter and text
    if (strength == 0) {
        strengthMeter.style.visibility = "hidden";
        strengthLabel.innerHTML = "";
    } else {
        strengthMeter.style.visibility = "visible";
        strengthMeter.style.backgroundColor = getStrengthColor(strength);
        strengthLabel.innerHTML = getStrengthLabel(strength);
    }
}

function getStrengthColor(strength) {
    if (strength <= 1) {
        return "#ff4d4d"; // Weak
    } else if (strength == 2) {
        return "#ffd633"; // Medium
    } else {
        return "#66ff66"; // Strong
    }
}

function getStrengthLabel(strength) {
    if (strength <= 1) {
        return "Weak";
    } else if (strength == 2) {
        return "Medium";
    } else {
        return "Strong";
    }
}


function generatePassword() {
    var length = document.getElementById("password-length").value;
    var includeUppercase = document.getElementById("include-uppercase").checked;
    var includeNumbers = document.getElementById("include-numbers").checked;
    var includeSymbols = document.getElementById("include-symbols").checked;

    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_-+=<>?";

    var allChars = lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    var generatedPassword = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * allChars.length);
        generatedPassword += allChars.charAt(randomIndex);
    }

    document.getElementById("generated-password").value = generatedPassword;
}




function generateHashes() {
    var password = document.getElementById("password").value;
    var md5Hash = CryptoJS.MD5(password).toString();
    var sha256Hash = CryptoJS.SHA256(password).toString();

    document.getElementById("md5-hash").textContent = md5Hash;
    document.getElementById("sha256-hash").textContent = sha256Hash;
}

