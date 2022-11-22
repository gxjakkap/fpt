const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')
const serviceAccount = require('../serviceAccount.json')

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

const resref = db.collection('results')

resref.get().then(snap => {
    let resarr = []
    snap.forEach(doc => {
        resarr.push(doc.data())
    })

    console.log(resarr)

    resarr.forEach(x => {
        const type = x.name.split(" ")[0]
        const ref = resref.doc(x.slug)
        ref.update({type: type}).then(a => console.log(a))
    })
})