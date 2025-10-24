// Demo-only login handler — replace with your real API later.
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = (document.getElementById('email')).value;
  const password = (document.getElementById('password')).value;

  // Simple validation
  if(!email || !password){
    alert('Please enter your email and password.');
    return;
  }

  // Placeholder: show success. Integrate with your backend / Auth provider next.
  alert(`Logged in as ${email}`);
});
