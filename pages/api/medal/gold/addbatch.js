// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../../utils/db/main'
import { v4 as uuidv4 } from 'uuid'

export default async function handler(req, res) {
    console.log(req.headers)
    if (req.method !== "POST" || req.headers.authorization !== process.env.API_KEY){
        res.status(401).send({ message: 'BReq' })
        return
    }

    const body = req.body
    const resref = db.collection('gold_medals')

    let a = []

    let c = 0

    body.forEach(i => {
        const date = new Date()
        let obj = {name: i, type: i.split(" ")[0], id: uuidv4(), date: date+c}
        a.push(obj)
        c++
    })

    console.log(a)

    a.forEach(async i => {
        await resref.doc(i.id).set(i)
        console.log(i)
    })

    res.status(200).json({msg: "OK"})
}
