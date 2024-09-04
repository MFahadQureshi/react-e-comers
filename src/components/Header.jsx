import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
  const handleLogout = async () =>{
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="navbar bg-base-100 p-4 shadow-lg mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#">Homepage</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a href="#">Settings</a></li>
            <li><button className="btn" onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
