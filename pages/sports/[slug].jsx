import Head from "next/head"
import Router from "next/router"
import axios from "axios"
import Footer from "../../components/Footer.jsx"
import Card from "../../components/Card.jsx"
import NavBar from "../../components/Navigation"

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}


export const getServerSideProps = async({req, res, params}) => {
    const slug = params.slug
    const apireq = await axios.get(`http://${req.headers.host}/api/match/bysports`, {params: {t: slug}})
    const data = await apireq.data
    return {
        props: {
            data: data.data,
            slug: slug
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

const Home = ({data, slug}) => {
  data.sort((a, b) => {
    return b.date - a.date
  })
  return (
   <>
    <Head>
      <title>{`กีฬา${slug} - สรุปผลการแข่งขันสีฟ้า💙`}</title>
    </Head>
    <div className="min-h-screen relative">
      <div className="z-40">
        <NavBar />
      </div>
      <div className='w-full lg:mx-0 flex flex-auto flex-col flex-grow pb-20'>
        <div className="text-center mt-10">
          <h1 className="text-5xl">{`ผลการแข่งขันสีฟ้า กีฬา${slug}💙`}</h1>
          <h3 className="text-xl my-3">อัพเดตล่าสุด: {localeDateString(data[0].date)}</h3>
        </div>
        <div className="my-5 ml-auto mr-auto grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-3 z-0">
          {data.map(item => (
            <div key={item.slug} className="btn-block" onClick={() => {Router.push(`/match/${item.slug}`)}}><Card props={item}/></div>
          ))}
        </div>
      </div>
      <div className="w-full absolute bottom-0">
        <Footer />
      </div>
    </div>
   </>
  )
}

export default Home