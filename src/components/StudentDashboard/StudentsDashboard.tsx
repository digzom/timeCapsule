import React, { useEffect } from "react"
import styles from "./Student.module.css"
import Link from "next/link"
import { Student, StudentListProps } from "../../types/StudentTypes"

export const StudentsDashboard = ({
  studentList,
}: StudentListProps): JSX.Element => {
  return (
    <div className={styles.studentContainer}>
      {studentList?.map((student: Student) => (
        <div className={styles.studentCard} key={student.name}>
          <Link href={`/${student.name}`}>
            <a className={styles.buttonLink}>{student.name}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}
