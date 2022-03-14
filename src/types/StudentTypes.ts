export type Student = {
  name: string
  card: string
  img_url: string
  extra?: string
}

export type StudentListProps = {
  studentList: Student[]
}
