import { Layout, Menu} from 'antd';
import { sidebarItemsGenerator } from '../../utils/sidebarItemsGenerator';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
const { Sider } = Layout;

const userRole={
  ADMIN:"admin",
  FACULTY:"faculty",
  STUDENT:"student",
}

const Sidebar = () => {
let sidebarItems;
const user = useAppSelector(selectCurrentUser);

switch (user?.role) {
  case userRole.ADMIN:
    sidebarItems=sidebarItemsGenerator(adminPaths,userRole.ADMIN)
    break;
  case userRole.FACULTY:
    sidebarItems=sidebarItemsGenerator(facultyPaths,userRole.FACULTY)
    break;
  case userRole.STUDENT:
    sidebarItems=sidebarItemsGenerator(studentPaths,userRole.STUDENT)
    break;

  default:
    break;
}
  return (
    <Sider
    style={{height:"100vh" ,position:"sticky",left:"0",top:"0"}}
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
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
  
  </Sider>
  );
};

export default Sidebar;