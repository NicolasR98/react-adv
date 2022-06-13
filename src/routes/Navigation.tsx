import {
  BrowserRouter, Routes, Route, NavLink, Navigate,
} from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg';

export const Navigation = () => {
  const [homePage] = routes;

  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {
                routes.map(({ name, to }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => (isActive ? 'nav-active' : '')}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))
            }
          </ul>
        </nav>

        <Routes>
          {
            routes.map(({ path, Component }) => (
              <Route
                path={path}
                element={<Component />}
                key={path}
              />
            ))
          }
          <Route path="/*" element={<Navigate to={homePage.to} replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};
