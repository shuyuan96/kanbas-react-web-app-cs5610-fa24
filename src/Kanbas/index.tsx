import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <h1>Kanbas</h1>
      <h2>Shuyuan Liu</h2>
      <h3> CS5610 SEC01</h3>
      {/* GitHub Repository Link */}
      <p>
        <a
          id="wd-github"
          href="https://github.com/shuyuan96/kanbas-react-web-app-cs5610-fa24"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source Code on GitHub
        </a>
      </p>
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses/:cid/*" element={<Courses />} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}