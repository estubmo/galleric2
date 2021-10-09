import axios from 'axios';
import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { NextApiRequestWithIronSession } from '../../types/nextapirequest';
import IStrapiUserResponse from '../../types/strapi';
import { API_URL } from '../../utils/urls';

export default withSession(async (req: NextApiRequestWithIronSession, res: NextApiResponse) => {
    const { identifier, password } = await req.body;
    try {
        const response: IStrapiUserResponse = await axios.post(`${API_URL}/auth/local/register`, {
            username: identifier,
            email: identifier,
            password: password
        });

        if (response.data.user) req.session.set('user', response.data.user);
        if (response.data.jwt) req.session.set('jwt', response.data.jwt);

        await req.session.save();
        res.json(response.data.user);
    } catch (error) {
        // TODO: Error handling that creates and extends Error types
        res.status(
            error.response?.data?.data?.responseCode || error.response?.data?.statusCode || 500
        ).send({
            statusCode: error.response?.data?.statusCode || 500,
            message:
                error.response?.data?.data?.response ||
                error.response?.data?.message[0]?.messages[0]?.message ||
                error.message
        });
    }
});
