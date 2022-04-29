const firebaseAdmin = require('firebase-admin')

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
        "type": "service_account",
        "project_id": "cif-hospitalar",
        "private_key_id": "c349b7300ccd60e93a7ea48cabb4839b5c2edb00",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8FXcHV8mPSgqz\n8djhUFSshIiRguBj++T9x9G7qIVvXdxrj4YrI8YsdPjxt9/qTtDMdwI49NnlZi0m\nnv7bA3LbGmYM2K+a9o7rhQEO7q3xk8B6Y1xWUTFiBYXoFqcE+oFZbpCV9F/BUa3j\nR15nnPb561b1HPdxcWOPG5VvsyCwHnSlFnokNDX6+fWhFGPY5zgeB/f75TF67ex8\nqg/cQ461Jq2Ch1XT8ztFdPoQwzYpgejO05mrMduOJs4TSRCYZqCmq4sKZIEi0I+U\nuPdqnQJzp8fuoAMjhYnNiMDYFk35RGHKgU0VQwZO1VE4N5itEy7/k16NE/koDNiV\nmJkDx/33AgMBAAECggEACCugGCItMbuySamiDoq9wD12wmhXjdsFmUjits616FCk\njq2cfbztYRqv9DwqOT81JAoFcRVoiuX3OdFw6Dhhob/8qMoX1lj9CoSyxVlYa529\nkdcMlRlXDzrcFJOrVoLccCwtrr3xokVMkvxapFe89xOUKaGZcmhN9yghGTvSi6P6\nGkL53T4n9KsByXXJgqDdp/PAg1qHR6yhnAudndEdh+ukOwOxLkgoUUERmxkG7j9w\n5b+TcjqJVXWwGtXv1KcqRsP5EJMmjQQkVxP1mOOUipaxOG08RGdQ0yZO2YgOus5l\nHy8F+xUG2pP5o82djT87NcvEdR3almU3Ssu1Izgq7QKBgQD0Eui9wX3f5rZkuCH8\nLF4kmzyg7Ebw//ZVTTHEAzGWtnGRVkeVo2oU12ie+/9fs83nsC52Hu4Q6iuPriFI\n1vrNE0nPEhm7F7eB/HMO19N/2LlSVY/h5CC9imGxftwlqkxCasDZzphUb00HdxgS\n5KdtrNqt4iauF9GulnyrweYbAwKBgQDFRi7xiMCCaoBhtFOTxdbgknLlXIbe0qsF\ntl7+c7fpXVVyDu6HkRNQk2aS942/alCQToudIO5C2GInCJaHKgtsLD63Hq8YGKI0\nmxGUJrdWYP3LBvC+uMJ1xDZSVEFAsb2+zovbUfI5A9SzipaNEForYzBh0UKdZ1J/\nJUfS/zvE/QKBgQDadHpALQke9/7UU0KH1KZGmXNAjXpJhq/SVY9vY3Rk8tLfRJw5\nwNPX551Kfz5pSCPJdZWAP9rQ5OcsaKx953z/RH5Ril/hZy7mdy/8Xwx8Z1wn51Eq\n2+a5/zvFhEhCphQvdiE6UYFiQWRuhBfWATYiIg5wh/Qa6lLQsvzPNnNgRQKBgHnD\n7E3h3xGgs0WbjMr1nsBXJNw11HnNBwsrmk7tFmPQ3GDenpTHE2j00qd8bd3svXWV\nRc/i964C6fK19lPPu+U1GjDlm6X/7n8SCDOuAhQrIfwjeI4AdOdECVOf9fb8vuX7\nj4/8cMqIds2riWng4gdN3htCkx+dGuqoFEFEkZvxAoGAJvJNAOExVcThZbaaCEk/\nyu9iaVCUDAVMkn2GsbwNb+7dEv/XnKPAkDCTa+udf0aWmPgcGv++ySfE792bY5nB\nE6EUmtK2f9/BBAnHzvm1wN82K2ATdTxUFpMqYw252xEqExaSfSe1xetZGVuLNVxv\nW4G3bbGf4ReAbxCoEUmShmU=\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-uut4a@cif-hospitalar.iam.gserviceaccount.com",
        "client_id": "104941262739521931806",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-uut4a%40cif-hospitalar.iam.gserviceaccount.com"
    })
})

module.exports = firebaseAdmin