
import { Layout, Menu, MenuProps} from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const items:MenuProps['items'] = [
  {
    key:'1',
    label:"Dashboard"
  },
  {
    key:'2',
    label:"Profile"
  },
  {
    key:'3',
    label:"User Management",
    children:[
      {
        key:'5',
        label:"Update Profile"
      },
      {
        key:'6',
        label:"total user"
      },
      {
        key:'7',
        label:"Update Profile"
      },
    ]
  },
  {
    key:'4',
    label:"Settings"
  },
]

const MainLayout = () => {
  return (
    <Layout style={{height:"100vh"}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{color:"white", padding:"20px",textAlign:"center"}}>
   <h1>
   PH University
   </h1>
      </div>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    
    </Sider>
  
    <Layout>
  
      <Header style={{ padding: 0}} />
   
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
          
          }}
        >
      <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  );
};

export default MainLayout;