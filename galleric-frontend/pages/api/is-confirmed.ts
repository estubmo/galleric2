import axios from 'axios';
import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { API_URL } from '../../utils/urls';

export default withSession(async (req: any, res: NextApiResponse) => {
    const jwt = req.session.get('jwt');
    if (jwt) {
        try {
            const headers = {
                headers: { Authorization: `Bearer ${jwt}` }
            };

            const response = await axios.get(`${API_URL}/auth/is-confirmed`, headers);

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
