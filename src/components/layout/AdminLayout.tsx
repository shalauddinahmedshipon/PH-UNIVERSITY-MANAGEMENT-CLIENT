import { Outlet } from "react-router-dom";


const AdminLayout = () => {
  return (
    <div>
      <nav>This is admin layout navbar</nav>
      <Outlet/>
    </div>
  );
};

export default AdminLayout;