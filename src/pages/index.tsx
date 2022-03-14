import Dashboard from "../components/Dashboard"
import React from "react"
import { collection, getDocs } from "firebase/firestore/lite"
import { db } from "../firebase"
import { StudentListProps } from "../types/StudentTypes"
import { GetStaticProps } from "next"
import Head from "next/head"

export default function Home({ studentList }: StudentListProps) {
  return (
    <div>
      <Head>
        <title>Cápsula do Tempo</title>
      </Head>
      <Dashboard studentList={studentList} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const studentsCollection = collection(db, "students")
    const students = await getDocs(studentsCollection)
    const studentList = students.docs.map((doc) => doc.data())
    return {
      props: {
        studentList,
      },
      revalidate: 1000 * 60 * 60 * 6,
    }
  } catch (e) {
    console.log(e)
  }
  return {
    props: [],
  }
}
