import { useState } from 'react'
import './index.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PicRightOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;
import { useNavigate, Outlet } from 'react-router-dom';


function LayoutApp() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const changeMenu = ({ item, key, keyPath, selectedKeys, domEvent }) => {
    // console.log(key)
    navigate(key)
  }

  return (
    <Layout style={{height:'100%'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical">
          <PicRightOutlined style={{fontSize:'30px', color:'#fff'}} />
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/data-preview']}
          onSelect={changeMenu}
          items={[
            {
              key: '/data-preview',
              icon: <UserOutlined />,
              label: '数据预览',
            },
            {
              key: '/content-manage',
              icon: <VideoCameraOutlined />,
              label: '内容管理',
            },
            {
              key: '/post-manage',
              icon: <UploadOutlined />,
              label: '文章发布',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet></Outlet>
          
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutApp