import { Navigate } from 'react-router-dom';
import About from '@/views/About';
import My from '@/views/My';
export default [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/my',
    element: <My />,
  },
] as {
  path: string;
  element: JSX.Element;
}[]