// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../../utils/db/main'

export default async function handler(req, res) {
    try {
        const { t } = req.query
        const resref = db.collection('results')
        const snap = await resref.where("type", "==", t).get()
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
    catch (e) {
        console.log(e)
    }
}
