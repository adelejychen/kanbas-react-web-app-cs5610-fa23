import db from "../Database";
import { Link } from "react-router-dom";
import React from "react";
import "./index.css"
import northeasternLogo from './Northeastern-University-Logo.png';


// import courses from "../Database/courses.json";
function Dashboard() {
  const courses = db.courses;
  
  return (
    <div>
      <h1 class = "font-weight-lighter s-16 bolder">Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      {/* <div class="row row-cols-1 row-cols-md-3 g-4"> */}
      
      {/* <div class="treeview col-sm-6 col-md-4 col-lg-3"> */}
        {/* <div className="row g-4 p-3
        sidebar-menu row d-flex justify-content-around
        text-xs-center relative brand-wrapper sticky b-b custom-card"> */}
         <div className="d-flex flex-wrap">
          {courses.map((course, index) => (
            <div class="card m-2" style={{width:"18rem"}}>
              <img src={northeasternLogo} className="card-img-top" alt="Northeastern University Logo" />

              <div class="card-body">
                <h5 class="card-title">{course._id} {course.number} {course.startDate}</h5>
                {/* <AssignmentEditor>

                </AssignmentEditor> */}

                <Link
                  key={course._id}
                  to={`./Kanbas/Courses/${course._id}`}
                  className="btn btn-primary"
                >
                  {course._id} {course.number} {course.name}
                </Link>
                <p class="card-text">
                  202410_1 Fall 2023 Semester Full Term
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      // </div>
      // </div>  
  );
}

export default Dashboard;


