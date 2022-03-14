import Dashboard from "../components/Dashboard"
import router from "next/router"
import React from "react"
import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase"
import { Student, StudentListProps } from "../types/StudentTypes"
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps } from "next"
import Head from "next/head"
import StudentPage from "../components/StudentPage/StudentPage"
import { ParsedUrlQuery } from "querystring"

interface IParams extends ParsedUrlQuery {
  slug: string
}

type StudentStaticProp = {
  student: Student
}

export const CardPage = ({ student }: StudentStaticProp): JSX.Element => (
  <StudentPage student={student} />
)

export default CardPage

export const getStaticPaths: GetStaticPaths = async () => {
  const studentsCollection = collection(db, "students")
  const students = await getDocs(studentsCollection)
  const studentList = students.docs.map((doc) => doc.data())
  const studentNames = studentList.map((student) => student.name)
  const arr = studentNames
  const paths = arr.map((slug) => {
    return {
      params: { slug },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const studentsCollection = collection(db, "students")
  const students = await getDocs(studentsCollection)
  const studentList = students.docs.map((doc) => doc.data())
  const { slug } = context.params as IParams

  const student = studentList.find((student) => slug === student.name)

  return { props: { student }, revalidate: 1000 * 60 * 60 * 6 } // 6 horas
}
