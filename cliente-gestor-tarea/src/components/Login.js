// src/components/Login.js
const Login = (onSubmit) => {
  const formContainer = document.createElement('div');
  formContainer.className = 'login-form-container';

  const form = document.createElement('form');
  form.innerHTML = `
    <h2>Iniciar sesión</h2>
    <div class="mb-3">
      <label for="username" class="form-label">Nombre de usuario</label>
      <input type="text" id="username" name="username" class="form-control" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Contraseña</label>
      <input type="password" id="password" name="password" class="form-control" required>
    </div>
    <button type="submit" class="btn btn-primary">Iniciar sesión</button>
  `;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('username');
    const password = formData.get('password');

    onSubmit(username, password);
  });

  formContainer.appendChild(form);

  return formContainer;
};

export default Login;
