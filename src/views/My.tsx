import React from 'react';
import { Button } from 'antd';
import { useNavigate} from 'react-router-dom'
const My: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>我的</h1>
      <Button onClick={() => {navigate("/about")}}></Button>
    </div>
  )
}
export default My