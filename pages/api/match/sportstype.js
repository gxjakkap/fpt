// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../../utils/db/main'

const removeDuplicates = (arr) => {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}

export default async function handler(req, res) {
  const resref = db.collection('results')
  const snap = await resref.get()
  let resarr = []
  snap.forEach(doc => {
    resarr.push(doc.data().type)
  })
  resarr = removeDuplicates(resarr)
  if (resarr.length >= 1){
    res.status(200).json({data: resarr})
  }
  else {
    res.status(404).json({err: "Not Found"})
  }
}
