import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Wayne</span>
                        </td>
                        <td className="wd-login-id">002345672W</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2021-05-12</td>
                        <td className="wd-total-activity">15:45:10</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Steve</span>{" "}
                            <span className="wd-last-name">Rogers</span>
                        </td>
                        <td className="wd-login-id">003456783R</td>
                        <td className="wd-section">S103</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2022-03-22</td>
                        <td className="wd-total-activity">8:30:45</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Natasha</span>{" "}
                            <span className="wd-last-name">Romanoff</span>
                        </td>
                        <td className="wd-login-id">004567894N</td>
                        <td className="wd-section">S104</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2023-01-15</td>
                        <td className="wd-total-activity">12:10:05</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Thor</span>{" "}
                            <span className="wd-last-name">Odinson</span>
                        </td>
                        <td className="wd-login-id">005678945P</td>
                        <td className="wd-section">S105</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-04-10</td>
                        <td className="wd-total-activity">7:45:20</td>
                    </tr>

                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Bruce</span>{" "}
                            <span className="wd-last-name">Banner</span>
                        </td>
                        <td className="wd-login-id">006789456C</td>
                        <td className="wd-section">S106</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-10-05</td>
                        <td className="wd-total-activity">18:30:15</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
