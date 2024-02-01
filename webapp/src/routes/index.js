import { AuthenticationLayout, DashboardLayout, Homepage } from '~/components/Layout/Layout';
import Dashboard from '~/pages/Dashboard/Dashboard';
import Home from '~/pages/Home/Home';
import Login from '../pages/Authentication/Login/Login';
import Register from '~/pages/Authentication/Register/Register';
// chưa login
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard, layout: DashboardLayout },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

// sau login
const privateRoutes = [];

export { privateRoutes, publicRoutes };
