import express from 'express'
import router from './router'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import { protect } from './modules/auth'
import { createNewUser, signIn } from './handlers/user'

const app = express()

app.use(morgan('dev'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log('hello from express')
    console.log(req.cookies)
    res.status(200)
    res.json({message: 'hello'})
})

app.use('/api', protect, router)

app.post('/user', createNewUser)
app.post('/signin', signIn)

export default app;