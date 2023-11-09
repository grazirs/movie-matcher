import { pool } from '../config/db'
import { v4 as uuidv4 } from 'uuid';
import { ISession } from '../types/session';
import { ISessionAccessCode } from '../types/sessionAccessCode';

export const createSession = async (): Promise<ISession | null> => {
    try {
   
  
      const query = `
        INSERT INTO sessions (id)
        VALUES ($1) RETURNING id, active, match_found, created_at;
      `;
  
      const data = [
        uuidv4()
      ];
  
      const result = await pool.query(query, data);
  
      return result.rows[0] || null;
    } catch (error) {
      console.log('Error creating session:', error);
      throw 'Error creating session.';
    }
  };


  export const createSessionAccessCode = async (session: ISession): Promise<ISessionAccessCode | null> => {
    try {

      const sessionId = session.id
     
      const query = `
        INSERT INTO session_codes (id, session_id, access_code)
        VALUES ($1, $2, $3) RETURNING id, active, access_code, session_id, created_at;
      `;
  
      const data = [
        uuidv4(),
        sessionId,
        uuidv4(),
      ];
  
      const result = await pool.query(query, data);
  
      return result.rows[0] || null;
    } catch (error) {
      console.log('Error creating session access code:', error);
      throw 'Error creating session access code.';
    }
  };

