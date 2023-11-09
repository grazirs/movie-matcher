
import { Request, Response } from 'express';
import { createSessionService } from '../services/sessionsServices';
import jwt from 'jsonwebtoken';


export const createSessionController = async(req: Request, res: Response) => {

    try {

        const result = await createSessionService()

        const currentUserAccessToken = result.currentUserAccessToken.access_code
        const guestUserAccessToken = result.guestUserAccessToken.access_code

        const jwtExpiry = 86400;

        const jwtToken = await jwt.sign({ key: currentUserAccessToken }, process.env.JWT_SECRET, {
          expiresIn: jwtExpiry
        });
    
        res.cookie('jwt', jwtToken, {
          httpOnly: true,
          sameSite: 'strict',
          maxAge: jwtExpiry * 1000 // maxAge is in MS
        });

        return res.status(201).json({
            success: true,
            message: 'ok',
            data: {
                tokens: {
                    currentUserAccessToken,
                    guestUserAccessToken   
                },
            }
            });
        
    } catch (error) {

        return res.status(201).json({
            success: false,
            message: 'error',
            
        
    })
    }
     
};
