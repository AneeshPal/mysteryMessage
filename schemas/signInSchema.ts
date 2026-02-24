import {z} from "zod"

export const signInSchema=z.object({
       identifier:z.string(), // here identifier is referring to  email 
       password:z.string(),
})