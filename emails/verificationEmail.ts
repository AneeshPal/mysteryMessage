import { codec, email } from "@/node_modules/zod/index.cjs"
import { allProcessors } from "@/node_modules/zod/v4/core/json-schema-processors.cjs"
import {Html,Head,Font,Preview, Heading,Row,Section,Text} from "@react-email/components"


interface VerificationEmailProps{
    username:string,
    otp:string
}

export default function VerificationEmail({username,otp}:VerificationEmailProps){
    return (
       <Html lang="en" dir="ltr">
       <Head>
       <title>Verification Code</title>
       </Head>
       <Preview>Here &allProcessors;s your verification code:{otp}</Preview>
       <section>
       <row>
       <Heading as="h2">Hello {username},<Heading>
       </row>
       <row>
       <Text>
       Thankyou for registering.Please use the following verification code to complete your registration:
       </Text>
       </row>
       <row>
       <text>{otp}
       </row>
       <row>
       <text>
       If you did not request this codec,please ignore this email.
       </text>
       </row>
       </section>
       </Html>
    );
}
    )
}
    