import Head from "next/head"
import Router from "next/router"
//import { db } from "../utils/db/main"
import axios from "axios"
import Footer from "../../components/Footer.jsx"
import NavBar from "../../components/Navigation"

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}



export const getServerSideProps = async({req, res, params}) => {
  const slug = params.slug
  const apireq = await axios.get(`http://${req.headers.host}/api/match/individual`, {params: {s: slug}})
  const data = await apireq.data
  return {
    props: {
      data: data.data
    }
  }
}

const MatchPage = ({data}) => {
  let s = ""
    let clr = ""
    if (data.win){
        s = "ชนะ"
        clr = "text-green-600"
    }
    else {
        if (data.score[0] == data.score[1]){
            s = "เสมอ"
            clr = "text-gray-500"
        }
        else {
            s = "แพ้"
            clr = "text-red-700"
        }
    }
  return (
   <>
    <Head>
      <title>สรุปผลการแข่งขันสีฟ้า💙</title>
    </Head>
    <div className="min-h-screen relative">
      <NavBar />
      <div className='w-full flex flex-auto flex-col flex-grow'>
        <div className="text-center mt-20">
          <h1 className="text-5xl">ผลการแข่งขัน {data.name}</h1>
        </div>
        <div className="my-10 ml-auto mr-auto">
            <h3 className={`text-4xl ${clr}`}>{`${s} ${data.score[0]} - ${data.score[1]}`}</h3>
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
   </>
  )
}

export default MatchPage