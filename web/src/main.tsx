import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import App from './App';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#18181b',
          colorBgBase: '#f5f5f2',
          colorBgContainer: '#ffffff',
          colorBorder: '#d8d8d2',
          colorText: '#18181b',
          colorTextSecondary: '#71717a',
          borderRadius: 8,
          fontFamily:
            'Outfit, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif',
          controlHeight: 36,
          fontSize: 14,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
