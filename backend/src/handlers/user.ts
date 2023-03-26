import prisma from "../db";
import { comparePasswords, CreateJWT, hashPassword } from "../modules/auth";

let options = {
    maxAge: 1000 * 60 * 15, // would expire after 15 minutes
    httpOnly: true, // The cookie only accessible by the web server
    signed: false // Indicates if the cookie should be signed
}

export const createNewUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    const token = CreateJWT(user)
    res.cookie("authorization", { token }, options)
    res.json({message: 'Signup successful'})
}

export const signIn = async (req,res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const password = await comparePasswords(req.body.password, user.password)

    if (!password) {
        res.status(401)
        res.send('Nope')
        return
    }

    const token = CreateJWT(user)
    res.cookie("authorization", { token }, options)
    res.send('Login successful')
}