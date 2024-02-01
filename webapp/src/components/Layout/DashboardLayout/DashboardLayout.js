import Header from './Header/Header';
import Sidebar from './Sidebar/SideBar';

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DashboardLayout;
