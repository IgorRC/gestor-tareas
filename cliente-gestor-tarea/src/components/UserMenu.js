// src/components/UserMenu.js
const UserMenu = (username, onLogout) => {
    const menu = document.createElement('div');
    menu.className = 'user-menu';
    menu.innerHTML = `
      <div class="user-info">
        <img src="path_to_user_profile_picture.jpg" alt="Profile Picture" class="profile-picture">
        <span class="username">${username}</span>
      </div>
      <ul class="menu-options">
        <li><a href="#">Ver perfil</a></li>
        <li><a href="#">Configuración</a></li>
        <li><a href="#" id="logout-btn">Cerrar sesión</a></li>
      </ul>
    `;
  
    menu.querySelector('#logout-btn').addEventListener('click', () => {
      onLogout();
    });
  
    return menu;
  };
  
  export default UserMenu;
  