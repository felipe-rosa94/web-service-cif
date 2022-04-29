const {initializeApp} = require('firebase/app')

const firebaseConfig = {
    apiKey: "AIzaSyAZ0VkkLExhQFv_mCVIyfYbxcyxhQofq8Y",
    authDomain: "cif-hospitalar.firebaseapp.com",
    projectId: "cif-hospitalar",
    storageBucket: "cif-hospitalar.appspot.com",
    messagingSenderId: "222550487247",
    appId: "1:222550487247:web:34db81c61d0025b845c7ba"
}

const app = initializeApp(firebaseConfig)

module.exports = app