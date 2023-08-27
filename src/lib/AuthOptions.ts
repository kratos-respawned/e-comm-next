import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
export const AuthOptions:NextAuthOptions={
    adapter:PrismaAdapter(db),
    session:{
        strategy:"jwt"
    },
    providers:[
        
    ]
}