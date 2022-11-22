// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../../utils/db/main'
import { v4 as uuidv4 } from 'uuid'

export default async function handler(req, res) {
    console.log(req.headers)
    if (req.method !== "POST" || req.headers.authorization !== process.env.API_KEY){
        res.status(401).send({ message: 'BReq' })
        return
    }

    let body = req.body
    const resref = db.collection('results')

    const slug = uuidv4()
    const date = new Date()

    body.slug = slug
    body.date = date.getTime()
    
    await resref.doc(slug).set(body)

    res.status(200).json({msg: "OK"})
}
