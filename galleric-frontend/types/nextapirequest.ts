import { NextApiRequest } from 'next';
import { Session } from 'next-iron-session';

export interface NextApiRequestExtended extends NextApiRequest {
    session: Session;
}
