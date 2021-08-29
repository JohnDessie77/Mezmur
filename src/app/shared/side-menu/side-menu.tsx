import React from "react";

const menus = [
  {
    label: "Dashboard",
    path: "/",
    key: "home",
  },
];

const SideMenu = () => {
  return (
    // <nav className="bg-white">
    //   <div className="container mx-auto flex items-center h-14 space-x-6	">
    //     <div className="text-primary-500 flex h-full items-center">
    //       <Link to="/" className="text-lg font-semibold">
    //         Mezmur+
    //       </Link>
    //     </div>
    //     <div className=" flex flex-grow h-full items-center justify-between space-x-6">
    //       <div className="flex items-stretch space-x-6 h-full">
    //         {menus.map((item, i) => (
    //           <NavLink
    //             key={item.key}
    //             className="top-menu flex items-center font-medium"
    //             to={item.path}
    //             exact
    //             activeClassName="active"
    //           >
    //             {item.label}
    //           </NavLink>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div></div>
  );
};

export default SideMenu;
