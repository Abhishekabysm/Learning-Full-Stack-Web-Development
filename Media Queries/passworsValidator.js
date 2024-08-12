function passwordValidator(givenPass) {
  if (givenPass.length >= 8) {
    let hasLowercase = false;
    let hasUppercase = false;
    for (let i = 0; i < givenPass.length; i++) {
      if (givenPass.charCodeAt(i) >= 97 && givenPass.charCodeAt(i) <= 122) {
        hasLowercase = true;
      }
      if (givenPass.charCodeAt(i) >= 65 && givenPass.charCodeAt(i) <= 90) {
        hasUppercase = true;
      }
    }
    if (hasLowercase && hasUppercase) {
      return "Your password is accepted.";
    } else {
      return "Your password doesn't satisfy the condition (needs both lowercase and uppercase letters).";
    }
  } else {
    return "Your password doesn't satisfy the condition (minimum 8 characters).";
  }
}

let givenPass = "weareprobro12@"; // Invalid (no uppercase letter)
console.log(passwordValidator(givenPass));
