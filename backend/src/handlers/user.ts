import prisma from "../db";
import { comparePasswords, CreateJWT, hashPassword } from "../modules/auth";

export const createNewUser = async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: req.body.username,
            password: await hashPassword(req.body.password)
        }
    })

    res.token = CreateJWT(user)
}

export const signIn = async (req,res) => {
    const user = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    const password = await comparePasswords(req.body.password, user.password)

    if (!password) {

    }
}