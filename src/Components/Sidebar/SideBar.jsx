import { NavLink } from "react-router-dom";


const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 bg-opacity-70 text-white p-4 z-50 transition-transform duration-300 transform lg:translate-x-0 lg:w-64 ${sidebarOpen ? "translate-x-0 w-3/4" : "-translate-x-full w-3/4"
          }`}

      >
        <h2 className="text-2xl font-bold mb-4">ABstats</h2>
        <ul>
          <li className="mb-2">
            <NavLink
              to="/"
              className="flex items-center p-2 hover:text-gray-400"
              onClick={closeSidebar}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/about"
              className="flex items-center p-2 hover:text-gray-400"
              onClick={closeSidebar}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
