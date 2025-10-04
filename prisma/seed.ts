import {PrismaClient} from "../generated/prisma/client"
import * as bcrypt from "bcryptjs"

async function main(){
    const client = new PrismaClient()
    const user = await client.user.create({
        data:{
            email:"simon@email.com",
            password:bcrypt.hashSync("12344",10),
            name:"jUmbo"
        }
    })
    console.log("User creado...",user.name)
}

main()