import { Student } from "../../types/StudentTypes"
import { Loader } from "../Loader/Loader"
import styles from "./Student.module.css"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import useWindowSize from "../../hooks/useWindowsSize"
import router from "next/router"
import { SyntheticEvent, useEffect, useState } from "react"

type StudentPageProps = {
  student: Student
}

export const StudentPage = ({ student }: StudentPageProps) => {
  const [isLoaded, setIsLoaded] = useState<any>(false)
  const [reload, setReload] = useState<any>(Math.random())
  const {
    cardContainer,
    messageContainer,
    studentName,
    cardMessage,
    cardImg,
    clickContainer,
    realContainer,
    seta,
    loaderImg,
    mobileMessage,
    back,
    backMessage,
    mobileBackMessage,
    mobileMessageContainer,
  } = styles

  const { width } = useWindowSize()

  const changeKey = (num: number) => {
    setReload(num)
  }

  useEffect(() => {
    changeKey(Math.random())
  }, [])

  return (
    <div className={realContainer}>
      <Head>
        <title>{student.name} - Cápsula</title>
      </Head>
      <div className={cardContainer}>
        <div className={messageContainer}>
          <div className={studentName}>
            <b>{student.name}</b>, essa foi a carta que você escreveu para si
            mesmo ano passado.
          </div>
          <div className={cardMessage}>"{student?.card}"</div>
        </div>
        {width < 1300 && (
          <div className={mobileMessage}>Toque na imagem para ver a foto</div>
        )}
        <Link href={student.img_url}>
          <a
            target="_blank"
            key={reload}
            onLoad={(e: any) => e.target.srcset && setIsLoaded(true)}
            children={
              <>
                <Image
                  src={student.img_url}
                  width={685}
                  height={700}
                  priority
                  objectFit="cover"
                />
                {!isLoaded && (
                  <div className={loaderImg}>
                    <Loader />
                  </div>
                )}
              </>
            }
            className={cardImg}
          />
        </Link>
        <div className={mobileMessageContainer}>
          <div className={mobileBackMessage} onClick={() => router.back()}>
            Voltar
          </div>
        </div>
      </div>
      <div className={back}>
        <div className={backMessage} onClick={() => router.back()}>
          &lt; Voltar
        </div>
        <div className={clickContainer}>
          <div>
            Clique na imagem para ver a carta original
            <img src="/seta.png" alt="seta" className={seta} width="50px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentPage
