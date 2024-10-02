import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                {/* <div className="col-md-4 col-lg-3"> */}
                    {/* <div className="wd-dashboard-course col" style={{ width: "300px" }}> */}
                    <div className="col-md-3" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-md-4 col-lg-3">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}> */}
                    <div className="col-md-3" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1235/Home">
                                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1235 Node JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text   ">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-md-4 col-lg-3">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }}> */}
                    <div className="col-md-3" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1236/Home">
                                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1236 Angular JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-md-4 col-lg-3">
                    <div className="wd-dashboard-course col" style={{ width: "300px" }} > */}
                    <div className="col-md-3" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1237/Home">
                                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1237 VUE JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-md-4 col-lg-3">
                    <div className="wd-dashboard-course" style={{ width: "300px" }}> */}
                    <div className="col-md-3" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1238/Home">
                                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title"    >
                                        CS1238 JavaScript
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text   ">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-md-4 col-lg-3">
                    <div className="wd-dashboard-course" style={{ width: "300px" }}> */}
                    <div className="col-md-3" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1239/Home">
                                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title"    >
                                        CS1239 JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text   ">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary" > Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
                {/* <div className="col-md-4 col-lg-3">
                    <div className="wd-dashboard-course" style={{ width: "300px" }} > */}
                    <div className="col-md-3" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                to="/Kanbas/Courses/1240/Home">
                                <img src="/images/reactjs.jpg" alt="" width="100%" height={160} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title"    >
                                        CS1240 JS
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text   ">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary" > Go </button>
                                </div>
                            </Link>
                        </div>
                    </div>
                {/* </div> */}
            </div>
        </div>
    );
}