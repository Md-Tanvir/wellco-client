import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddCourse from "../AddCourse/AddCourse";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageBlogs from "../ManageBlogs/ManageBlogs";
import ManageCourses from "../ManageCourses/ManageCourses";
import ManageOrders from "../ManageOrders/ManageOrders";
import ManageReviews from "../ManageReviews/ManageReviews";
import MyOrders from "../MyOrders/MyOrders";
import PublishBlog from "../PublishBlog/PublishBlog";
import Review from "../Review/Review";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  return (
    <div className="main-dashboard">
      <div className="container">
        <div className="row py-5">
          <div>
            <button
              className="btn btn-dash float-end mb-5 mb-md-0"
              data-bs-toggle="offcanvas"
              href="#offcanvasExample"
              role="button"
              aria-controls="offcanvasExample"
            >
              Check Dashboard
            </button>

            <div
              className="offcanvas main-canvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header dash-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  Dashboard
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <div className="dash-nav">
                  {/* {admin && ( */}
                  <>
                    <NavLink to={`${url}/manageAllOrders`}>
                      <h5>Manage All Orders</h5>
                    </NavLink>
                    <NavLink to={`${url}/publishBlog`}>
                      <h5>Publish Blog</h5>
                    </NavLink>
                    <NavLink to={`${url}/manageCourses`}>
                      <h5>Manage Courses</h5>
                    </NavLink>
                    <NavLink to={`${url}/addCourse`}>
                      <h5>Add Course</h5>
                    </NavLink>
                    <NavLink to={`${url}/makeAdmin`}>
                      <h5>Make Admin</h5>
                    </NavLink>
                    <NavLink to={`${url}/manageBlogs`}>
                      <h5>Manage Blogs</h5>
                    </NavLink>
                    <NavLink to={`${url}/manageReviews`}>
                      <h5>Manage Reviews</h5>
                    </NavLink>
                  </>
                  {/* )} */}

                  {/* {!admin && ( */}
                  <>
                    <NavLink to={`${url}/myOrder`}>
                      <h5>My Orders</h5>
                    </NavLink>
                    <NavLink to={`${url}/review`}>
                      <h5>Give Feedback</h5>
                    </NavLink>
                  </>
                  {/* )} */}
                  <div className="text-center">
                    <button onClick={logout} className="btn btn-danger mt-3">
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-area">
            <Switch>
              <Route exact path={path}>
                <DashboardHome></DashboardHome>
              </Route>

              <Route path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/manageCourses`}>
                <ManageCourses></ManageCourses>
              </Route>
              <Route path={`${path}/addCourse`}>
                <AddCourse></AddCourse>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route path={`${path}/myOrder`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/manageOrders`}>
                <ManageOrders></ManageOrders>
              </Route>
              <Route path={`${path}/manageBlogs`}>
                <ManageBlogs></ManageBlogs>
              </Route>
              <Route path={`${path}/manageReviews`}>
                <ManageReviews></ManageReviews>
              </Route>
              <Route path={`${path}/publishBlog`}>
                <PublishBlog></PublishBlog>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
