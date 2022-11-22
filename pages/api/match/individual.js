// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../../utils/db/main'

export default async function handler(req, res) {
  try {
    const { s } = req.query
    const resref = db.collection('results')
    const snap = await resref.where("slug", "==", s).get()
    if (snap.empty){
        res.status(404).json({err: "Not Found"})
    }
    let resarr = []
    snap.forEach(doc => {
        resarr.push(doc.data())
    })
    if (resarr.length == 1){
        res.status(200).json({data: resarr[0]})
    }
    else {
        res.status(404).json({err: "Not Found"})
    }
  }
  catch (err) {
    console.log(err)
    res.status(500).json({err: "Internal Server Error"})
  }
}
