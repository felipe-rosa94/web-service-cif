require('dotenv').config()
const firebaseAdmin = require('../firebaseAdmin')
const app = require('../firebase')
const {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword} = require('firebase/auth')

const auth = getAuth(app)

exports.post = ('/:funcao', (req, res) => {
    if (req.params.funcao === 'criaConta')
        criaConta(req, res)
    else if (req.params.funcao === 'login')
        login(req, res)
    else if (req.params.funcao === 'redefiniSenha')
        redefiniSenha(req, res)
})

const criaConta = (req, res) => {
    const {email, senha, nome, telefone} = req.body
    firebaseAdmin
        .auth()
        .createUser({
            email: email,
            password: senha,
            displayName: nome,
            phoneNumber: '+55' + telefone,
            disabled: false,
            emailVerified: false
        })
        .then(() => res.status(200).send({sucesso: true, mensagem: 'Conta criada com sucesso!'}))
        .catch(e => {
            if (e.message.includes('email address is already'))
                res.status(400).send({
                    sucesso: false,
                    mensagem: 'O endereço de e-mail já está sendo usado por outra conta.'
                })
            else
                res.status(400).send({
                    sucesso: false,
                    mensagem: e.message
                })
        })
}

const login = (req, res) => {
    const {email, senha} = req.body
    signInWithEmailAndPassword(auth, email, senha)
        .then((r) => {
            const {user: {displayName, email}} = r
            res.status(200).send({
                sucesso: true,
                mensagem: 'Login com sucesso!',
                dados: {nome: displayName, email: email}
            })
        })
        .catch(e => {
            if (e.code === 'auth/wrong-password')
                res.status(401).send({sucesso: false, mensagem: 'Erro de autenticação de senha errada'})
            else if (e.code === 'auth/user-not-found')
                res.status(401).send({sucesso: false, mensagem: 'Erro de autenticação usuário não encontrado'})
            else
                res.status(401).send({sucesso: false, mensagem: e.message})
        })
}

const redefiniSenha = (req, res) => {
    const {email} = req.body
    sendPasswordResetEmail(auth, email)
        .then((r) => res.status(200).send({
            sucesso: true,
            mensagem: 'Um link para redefinição de senha foi enviado para seu e-mail'
        }))
        .catch(e => {
            if (e.code === 'auth/user-not-found')
                res.status(401).send({sucesso: false, mensagem: 'Erro de autenticação usuário não encontrado'})
            else
                res.status(401).send({sucesso: false, mensagem: e.message})
        })
}
