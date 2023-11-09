export interface IBaseSessionAccessCode{
    access_code: string;
    active: boolean;
    created_at: Date;
    session_id: string;
}


export interface ISessionAccessCode extends IBaseSessionAccessCode{
    id: string;
}