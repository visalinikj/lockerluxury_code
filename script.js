function sendOTP() {
    const mobile = document.getElementById('mobile').value;
    var check=100;
    if (mobile) {
      alert('THE LOCKER IS CLOSED OTP sent to ' + mobile+' THE OTP IS'+check);
      // Logic to send OTP via backend (e.g., API call) goes here.
    } else {
      alert('Please enter a valid mobile number.');
    }
  }
  
  document.getElementById('otpForm').onsubmit = function(e) {
    e.preventDefault();
    const otp = document.getElementById('otp').value;
    if (otp) {
      alert('OTP VERIFIED THE LOCKER IS OPENED');
      // Logic to verify OTP via backend (e.g., API call) goes here.
    } else {
      alert('Please enter the OTP.');
    }
};