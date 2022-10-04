import { FullConfig } from "@playwright/test";
import dotenv from "dotenv"

async function globalSetup(config: FullConfig){
    console.log("process log "+ process.env.test_env +'\n\n\n\n\n\n\n\n')
    if(process.env.test_env)
    
    {
        dotenv.config({
            path:`helper/env/.env.${process.env.test_env}`,
            override:true
            
        })
    }

}
export default globalSetup;