import axios from 'axios';
import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { API_URL } from '../../utils/urls';

export default withSession(async (req: any, res: NextApiResponse) => {
    const jwt = req.session.get('jwt');
    const user = req.session.get('user');

    if (jwt) {
        try {
            const config = {
                headers: { Authorization: `Bearer ${jwt}` }
            };
            let response;
            if (user.confirmed) {
                response = await axios.get(`${API_URL}/users/me`, config);
            } else {
                response = await axios.get(`${API_URL}/auth/is-confirmed`, config);
            }

            if (response.data) req.session.set('user', response.data);
            await req.session.save();
            res.json(response.data);
        } catch (error) {
            res.send(error.response);
        }
    } else {
        res.end();
    }
});
