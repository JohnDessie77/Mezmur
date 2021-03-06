import React from "react";

// const menus = [
//   {
//     label: "Dashboard",
//     path: "/",
//     key: "home",
//   },
// ];

const Header = (props: any) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="https://mezmurplus.netlify.app/"
          >
            Mezmur+
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="https://mezmurplus.netlify.app/"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " far fa-file-alt text-lg leading-lg mr-2"
                  }
                />{" "}
                Home
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") +
                    " fab fa-facebook text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Share</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") + " fab fa-twitter text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Tweet</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                    : "text-gray-800 hover:text-gray-600") +
                  " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="#pablo"
              >
                <i
                  className={
                    (props.transparent
                      ? "lg:text-gray-300 text-gray-500"
                      : "text-gray-500") + " fab fa-github text-lg leading-lg "
                  }
                />
                <span className="lg:hidden inline-block ml-2">Star</span>
              </a>
            </li>

            <li className="flex items-center">
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-green-500 text-white active:bg-green-600") +
                  " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Admin
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <SideMenu/>
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
  );
};

export default Header;
