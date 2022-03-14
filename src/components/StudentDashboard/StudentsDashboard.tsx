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
        <Link href={`/${student.name}`} key={student.name}>
          <a className={styles.buttonLink}>
            <div className={styles.studentCard}>{student.name}</div>
          </a>
        </Link>
      ))}
    </div>
  )
}
