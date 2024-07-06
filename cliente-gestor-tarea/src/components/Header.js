// src/components/Header.js

const Header = (currentUser, handleLogout, toggleUserMenu) => {
  // Crear el elemento header con la clase 'navbar'
  const header = document.createElement('header');
  header.className = 'navbar navbar-expand-lg navbar-light bg-light';

  // Navbar brand
  const navbarBrand = document.createElement('a');
  navbarBrand.className = 'navbar-brand';
  navbarBrand.href = '#';
  navbarBrand.textContent = 'Gestor de Tareas';
  header.appendChild(navbarBrand);

  // Navbar toggler (botón para colapsar en pantallas pequeñas)
  const navbarToggler = document.createElement('button');
  navbarToggler.className = 'navbar-toggler';
  navbarToggler.type = 'button';
  navbarToggler.setAttribute('data-bs-toggle', 'collapse');
  navbarToggler.setAttribute('data-bs-target', '#navbarSupportedContent');
  navbarToggler.setAttribute('aria-controls', 'navbarSupportedContent');
  navbarToggler.setAttribute('aria-expanded', 'false');
  navbarToggler.setAttribute('aria-label', 'Toggle navigation');
  navbarToggler.innerHTML = `
    <span class="navbar-toggler-icon"></span>
  `;
  header.appendChild(navbarToggler);

  // Navbar items
  const navbarCollapse = document.createElement('div');
  navbarCollapse.className = 'collapse navbar-collapse';
  navbarCollapse.id = 'navbarSupportedContent';
  header.appendChild(navbarCollapse);

  const navbarNav = document.createElement('ul');
  navbarNav.className = 'navbar-nav ms-auto mb-2 mb-lg-0'; // 'ms-auto' para alinear a la derecha
  navbarCollapse.appendChild(navbarNav);

  // User menu
  if (currentUser) {
    const userMenu = document.createElement('li');
    userMenu.className = 'nav-item dropdown';

    const userLink = document.createElement('a');
    userLink.className = 'nav-link dropdown-toggle';
    userLink.href = '#';
    userLink.innerHTML = `
      <img src="path_to_user_profile_picture.jpg" alt="Profile Picture" class="profile-picture">
      ${currentUser}
    `;
    userLink.addEventListener('click', toggleUserMenu); // Agregar evento 'click' para desplegar el menú
    userLink.setAttribute('role', 'button'); // Agregar el atributo role para accesibilidad
    userLink.setAttribute('aria-expanded', 'false'); // Atributo 'aria-expanded' inicializado en 'false'
    userMenu.appendChild(userLink);

    const userMenuDropdown = document.createElement('ul');
    userMenuDropdown.className = 'dropdown-menu dropdown-menu-end';
    userMenuDropdown.setAttribute('aria-labelledby', 'navbarDropdown');

    // Opciones del menú de usuario
    const userInfoItem = document.createElement('li');
    userInfoItem.innerHTML = '<a class="dropdown-item" href="#">Ver perfil</a>';
    userMenuDropdown.appendChild(userInfoItem);

    const logoutItem = document.createElement('li');
    logoutItem.innerHTML = '<a class="dropdown-item" href="#">Cerrar sesión</a>';
    logoutItem.addEventListener('click', handleLogout);
    userMenuDropdown.appendChild(logoutItem);

    userMenu.appendChild(userMenuDropdown);
    navbarNav.appendChild(userMenu);
  }

  return header;
};

export default Header;
