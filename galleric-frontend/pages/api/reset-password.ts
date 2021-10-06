import axios from 'axios';
import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { NextApiRequestWithIronSession } from '../../types/nextapirequest';
import { API_URL } from '../../utils/urls';

export default withSession(async (req: NextApiRequestWithIronSession, res: NextApiResponse) => {
    const { code, password } = await req.body;

    try {
        const response = await axios.post(`${API_URL}/auth/reset-password`, {
            code,
            password,
            passwordConfirmation: password
        });

        if (response.data.user) req.session.set('user', response.data.user);
        if (response.data.jwt) req.session.set('jwt', response.data.jwt);
        await req.session.save();
        res.json(response.data.user);
    } catch (error) {
        res.status(error.response?.data?.statusCode || 500).send({
            statusCode: error.response?.data?.statusCode || 500,
            message: error.response?.data?.message[0]?.messages[0]?.message || error.message
        });
    }
});
