import axios from 'axios';
import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { NextApiRequestWithIronSession } from '../../types/nextapirequest';
import { API_URL } from '../../utils/urls';

export default withSession(async (req: NextApiRequestWithIronSession, res: NextApiResponse) => {
    const { email, confirmationToken } = await req.body;
    try {
        const response = await axios.get(
            `${API_URL}/auth/email-confirmation?email=${email}&confirmation=${confirmationToken}`
        );

        // if (response.data.user) req.session.set('user', response.data.user);
        // if (response.data.jwt) req.session.set('jwt', response.data.jwt);
        // await req.session.save();
        res.status(response.status).json({ statusText: response.statusText });
    } catch (error) {
        res.status(error.response?.data?.statusCode || 500).send({
            statusCode: error.response?.data?.statusCode || 500,
            message: error.response?.data?.message || error.message
        });
    }
});
