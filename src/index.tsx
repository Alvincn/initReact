import ReactDOM from 'react-dom/client';
import App from './App';
import { ConfigProvider } from 'antd';
// 引入路由
import { BrowserRouter, HashRouter } from 'react-router-dom'

// 语言汉化
import zhCn from 'antd/locale/zh_CN';
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <ConfigProvider locale={zhCn}>
      <App />
    </ConfigProvider>
  </HashRouter>
  
);
