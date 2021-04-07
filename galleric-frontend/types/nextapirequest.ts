import { NextApiRequest } from 'next';
import { Session } from 'next-iron-session';

export interface NextApiRequestWithIronSession extends NextApiRequest {
    session: Session;
}
