import { createSession, createSessionAccessCode } from "../data/sessionsDataAccess"

export const createSessionService = async () => {


    try {


        //Create new session

        const newSession = await createSession()

        console.log("Session data::")
        console.log(newSession)


        //Create token for this user

        const currentUserAccessToken = await createSessionAccessCode(newSession);

        console.log("CURRENT USER Access token>>")
        console.log(currentUserAccessToken)

        //create token for their guest

        const guestUserAccessToken = await createSessionAccessCode(newSession);

        console.log("GUEST USER Access token>>")
        console.log(guestUserAccessToken)


        const data = {

            currentUserAccessToken,
            guestUserAccessToken,

        }

        console.log(data)

    


        return data
        

    } catch (error) {

        console.log("Error in the create session service!")
        console.log(error)
        
    }



}











