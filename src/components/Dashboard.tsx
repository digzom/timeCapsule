import React from "react"
import { useEffect, useState } from "react"
import { StudentsDashboard } from "./StudentDashboard/StudentsDashboard"
import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase"
import { relative } from "path"
import { StudentListProps } from "../types/StudentTypes"
import { Loader } from "./Loader/Loader"
import useWindowSize from "../hooks/useWindowsSize"

const Dashboard = ({ studentList }: StudentListProps) => {
  const { width } = useWindowSize()
  return (
    <div
      style={{
        paddingTop: `${width < 1300 ? "30px" : "0px"}`,
        paddingBottom: `${width < 1300 ? "30px" : "0px"}`,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        maxWidth: 1270,
        position: `${width > 1300 ? "relative" : "static"}`,
        bottom: `${width > 1300 ? "40px" : "0"}`,
      }}
    >
      {studentList?.length > 0 ? (
        <div>
          <p className="welcome">CÁPSULA DO TEMPO</p>
          <div>
            <StudentsDashboard studentList={studentList} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Dashboard
