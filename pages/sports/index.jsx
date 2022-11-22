import Head from "next/head"
import Router from "next/router"
import axios from "axios"
import Footer from "../../components/Footer.jsx"
import SportCard from "../../components/SportCard.jsx"
import NavBar from "../../components/Navigation"

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export const getServerSideProps = async({req, res}) => {
  const apireq = await axios.get(`http://${req.headers.host}/api/match/sportstype`)
  const data = await apireq.data
  return {
    props: {
      data: data.data
    }
  }
}

const localeDateString = (date) => {
  let epdate = new Date(date);
  return epdate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
};

const Home = ({data}) => {
  return (
   <>
    <Head>
      <title>ประเภทกีฬา - สรุปผลการแข่งขันสีฟ้า💙</title>
    </Head>
    <div className="min-h-screen relative">
      <NavBar />
      <div className='w-full lg:mx-0 flex flex-auto flex-col flex-grow pb-20'>
        <div className="text-center mt-10">
          <h1 className="text-5xl">ประเภทกีฬา</h1>
        </div>
        <div className="my-5 ml-auto mr-auto grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-3">
          {data.map(item => (
            <div key={item} className="btn-block" onClick={() => {Router.push(`/sports/${encodeURIComponent(item)}`)}}><SportCard props={item}/></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 w-screen">
        <Footer />    
      </div>
    </div>
   </>
  )
}

export default Home