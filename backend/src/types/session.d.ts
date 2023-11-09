export interface IBaseSession{
    active: boolean;
    match_found: boolean;
    created_at: Date;
}


export interface ISession extends IBaseSession{
    id: string;
}


