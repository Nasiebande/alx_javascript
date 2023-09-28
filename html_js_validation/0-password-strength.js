function validatePassword() {
    var password = document.getElementById('password').value;
  
    // Describe the regular expressions for the passwd criteria
    var lengthRegex = /.{8,}/;
    var uppercaseRegex = /[A-Z]/;
    var lowercaseRegex = /[a-z]/;
    var numericRegex = /[0-9]/;
    var specialCharRegex = /[!@#$%^&*]/;
  
    // Validate each criteria using the regular expressions
    if (!lengthRegex.test(password)) {
      document.getElementById('error').textContent = 'Password must be at least 8 characters long.';
      return false;
    }
  
    if (!uppercaseRegex.test(password)) {
      document.getElementById('error').textContent = 'Password must contain at least one uppercase letter.';
      return false;
    }
  
    if (!lowercaseRegex.test(password)) {
      document.getElementById('error').textContent = 'Password must contain at least one lowercase letter.';
      return false;
    }
  
    if (!numericRegex.test(password)) {
      document.getElementById('error').textContent = 'Password must contain at least one numeric digit.';
      return false;
    }
  
    if (!specialCharRegex.test(password)) {
      document.getElementById('error').textContent = 'Password must contain at least one special character (!@#$%^&*).';
      return false;
    }
  
    // If all criteria are met, allow form submission
    return true;
  }
