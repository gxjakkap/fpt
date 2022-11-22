// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../../utils/db/main'

export default async function handler(req, res) {
  const resref = db.collection('results')
  const snap = await resref.get()
  let resarr = []
  snap.forEach(doc => {
    resarr.push(doc.data())
  })
  if (resarr.length >= 1){
    res.status(200).json({data: resarr})
  }
  else {
    res.status(404).json({err: "Not Found"})
  }
}
