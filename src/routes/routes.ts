/* eslint-disable no-undef */
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/views';

interface Route {
    to: string,
    path: string,
    name: string,
    Component: () => JSX.Element,
}

export const routes: Route[] = [
  {
    to: '/lazy1',
    path: '/lazy1',
    name: 'Lazy-1',
    Component: LazyPage1,
  },
  {
    to: '/lazy2',
    path: '/lazy2',
    name: 'Lazy-2',
    Component: LazyPage2,
  },
  {
    to: '/lazy3',
    path: '/lazy3',
    name: 'Lazy-3',
    Component: LazyPage3,
  },
];
