import React from "react"
import { useEffect, useState } from "react"
import { StudentsDashboard } from "./StudentDashboard/StudentsDashboard"
import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase"
import { relative } from "path"
import { StudentListProps } from "../types/StudentTypes"

const Dashboard = ({ studentList }: StudentListProps) => {
  return (
    <div style={{ position: "relative", bottom: 60 }}>
      {studentList?.length > 0 ? (
        <div>
          <p className="welcome">CÁPSULA DO TEMPO</p>
          <div>
            <StudentsDashboard studentList={studentList} />
          </div>
        </div>
      ) : (
        <>
          <div style={{ paddingTop: 100, textAlign: "center", fontSize: 18 }}>
            Aguarde
          </div>
          <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
