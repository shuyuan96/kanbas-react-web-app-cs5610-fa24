import { Link, NavLink } from "react-router-dom";
export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {/* <Link id="wd-course-home-link" to="/Kanbas/Courses/1234/Home" className="list-group-item active border border-0"   >Home</Link> */}
            <NavLink id="wd-course-home-link" to="/Kanbas/Courses/1234/Home" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Home
            </NavLink>
            {/* <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className="list-group-item text-danger border border-0">Modules */}
            {/* </Link> */}
            <NavLink id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Modules
            </NavLink>
            {/* <Link id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza" className="list-group-item text-danger border border-0">Piazza</Link> */}
            <NavLink id="wd-course-piazza-link" to="/Kanbas/Courses/1234/Piazza" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Piazza
            </NavLink>
            {/* <Link id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom" className="list-group-item text-danger border border-0">Zoom</Link> */}
            <NavLink id="wd-course-zoom-link" to="/Kanbas/Courses/1234/Zoom" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Zoom
            </NavLink>
            {/* <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Assignments" className="list-group-item text-danger border border-0"> */}
            {/* Assignments</Link> */}
            <NavLink id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Assignments" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Assignments
            </NavLink>
            {/* <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Quizzes" className="list-group-item text-danger border border-0">Quizzes */}
            {/* </Link> */}
            <NavLink id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Quizzes" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Quizzes
            </NavLink>
            {/* <Link id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades" className="list-group-item text-danger border border-0">Grades</Link> */}
            <NavLink id="wd-course-grades-link" to="/Kanbas/Courses/1234/Grades" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>Grades
            </NavLink>
            {/* <Link id="wd-course-people-link" to="/Kanbas/Courses/1234/People" className="list-group-item text-danger border border-0">People</Link> */}
            <NavLink id="wd-course-people-link" to="/Kanbas/Courses/1234/People" className={({ isActive }) => "list-group-item border border-0" + (isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0")}>People
            </NavLink>
        </div>
    );
}