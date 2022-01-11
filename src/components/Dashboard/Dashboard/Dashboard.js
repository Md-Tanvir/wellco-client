import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";

const Dashboard = () => {

    let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();

  return (
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
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-white" id="offcanvasExampleLabel">
                Your Dashboard
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
                {admin && (
                  <>
                    <NavLink to={`${url}/manageAllOrders`}>
                      <h5>Manage All Orders</h5>
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
                  </>
                )}

                {!admin && (
                  <>
                    <NavLink to={`${url}/myOrder`}>
                      <h5>My Order</h5>
                    </NavLink>
                    <NavLink to={`${url}/review`}>
                      <h5>Give Review</h5>
                    </NavLink>
                  </>
                )}
                <div className="text-center">
                  <button onClick={logout} className="btn btn-danger mt-3">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
