import{Message} from "@/model/User";

export interface ApiResponse{
    success:boolean;
    message:string;
    isAcceptingMessages?:boolean; // not everytime in api response there will be this field so used "?"
    messages?:Array<Message>     //imported from user.ts file messages of user
}
