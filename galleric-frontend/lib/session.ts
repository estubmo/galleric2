import { NextApiResponse } from 'next';
import { Handler, Session, withIronSession } from 'next-iron-session';

import { NextApiRequestWithIronSession } from '../types/nextapirequest';

export default function withSession(
    handler: Handler<NextApiRequestWithIronSession, NextApiResponse>
): (...args: []) => Promise<Session> {
    const MIN_PW_LENGTH = 32;
    const pw = process.env.SECRET_COOKIE_PASSWORD;
    if (!pw) throw Error('SECRET_COOKIE_PASSWORD not set');
    if (pw && pw.length < MIN_PW_LENGTH) {
        throw Error('SECRET_COOKIE_PASSWORD needs to be more than 32 characters');
    }
    return withIronSession(handler, {
        password: pw,
        cookieName: '__galleric_usersession',
        cookieOptions: {
            secure: true,
            // secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        }
    });
}
