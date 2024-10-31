import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        to="/Kanbas/Account/Signin"
        className={({ isActive }) =>
          `list-group-item border border-0 ${isActive ? "active" : ""}`
        }
      >
        Signin
      </NavLink>
      
      {!currentUser && (
        <NavLink
          to="/Kanbas/Account/Signup"
          className={({ isActive }) =>
            `list-group-item text-danger border border-0 ${isActive ? "active" : ""}`
          }
        >
          Signup
        </NavLink>
      )}

      <NavLink
        to="/Kanbas/Account/Profile"
        className={({ isActive }) =>
          `list-group-item text-danger border border-0 ${isActive ? "active" : ""}`
        }
      >
        Profile
      </NavLink>
    </div>
  );
}
