import '../sass/main.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './utils/firebase';

import './views/components/index';
import Home from './views/pages/home';
import Post from './views/pages/post';
import Login from './views/pages/auth/login';
import Register from './views/pages/auth/register';

const routes = {
  '/': Home,
  '/post.html': Post,
  '/login.html': Login,
  '/register.html': Register,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  const route = detectRoute();
  route.init();
});
