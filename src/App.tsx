import React from 'react';
import Hello from '@/components/Hello';
import { useRoutes, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import routes from './routes';
const App: React.FC = () => {
  const routeView = useRoutes(routes)
  const navigate = useNavigate()
  return (
    <div className="App">
      <Hello name='chenshibo'/>
      <Button onClick={() => {navigate('/my')}}>我的</Button>
      {routeView}
    </div>
  );
}

export default App;
