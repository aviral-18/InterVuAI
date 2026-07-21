import { connectDB } from "@/app/dbConfig/dbConfig";
import Interview from "@/app/models/InterviewModel";

// Now I am connect with Database..
connectDB()

// Post Request method
//gives info about saved interviews with there question and answer using mockid


export async function POST(request){
    try {
        const myurl = request.url.split('/')
        const myId = myurl[myurl.length-1]

        console.log(myId);
        
        const myInterview = await Interview.findOne({mockid: myId})

        if(myInterview){
            return Response.json({
                message : "Successfull Found InterView!!",
                success : true,
                myInterview: myInterview
            })
        }
        else{
            return Response.json({error : "InterView Not Exist!!"},{status: 400});
        }

    } catch (error) {
        console.log("Error Ageya Bro");
        return Response.json({error : error},{status:500})
    }
}