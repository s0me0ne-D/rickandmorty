import { createHashRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { CharacterPage } from './components/CharacterPage/CharacterPage';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/character/:characterId', element: <CharacterPage /> },
    ],
  },
]);
