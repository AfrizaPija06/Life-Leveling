document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const btn = document.querySelector('.register-button');
  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  btn.textContent = 'INITIALIZING...';
  btn.style.background = 'linear-gradient(45deg, #ff6b00, #ff8c00)';

  // Register ke Supabase
  const { data, error } = await sb.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName }
    }
  });

  if (error) {
    alert('❌ Register gagal: ' + error.message);
    btn.textContent = 'Create Account';
    btn.style.background = 'linear-gradient(45deg, #00ffff, #0080ff)';
    return;
  }

  alert('✅ Account created! Cek email untuk verifikasi.');
  window.location.href = './login.html';
});
