import axios from 'axios';
import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { NextApiRequestWithIronSession } from '../../types/nextapirequest';
import { API_URL } from '../../utils/urls';

export default withSession(async (req: NextApiRequestWithIronSession, res: NextApiResponse) => {
    const jwt = req.session.get('jwt');
    console.log('jwt', jwt);
    if (jwt) {
        try {
            const headers = {
                headers: { Authorization: `Bearer ${jwt}` }
            };

            const response = await axios.post(`${API_URL}/auth/send-email-confirmation`, headers);
            console.log('response', response);

            res.json(response.data);
        } catch (error) {
            res.status(error.response?.data?.statusCode || 500).send({
                statusCode: error.response?.data?.statusCode || 500,
                message: error.response?.data?.message[0]?.messages[0]?.message || error.message
            });
        }
    } else {
        res.end();
    }
});
