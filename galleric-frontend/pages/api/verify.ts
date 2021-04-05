import axios from 'axios';

import withSession from '../../lib/session';
import { API_URL } from '../../utils/urls';

export default withSession(async (req: any, res: any) => {
    const { email, confirmationToken } = await req.body;
    try {
        const response = await axios.get(
            `${API_URL}/auth/email-confirmation?email=${email}&confirmation=${confirmationToken}`
        );
        console.log('response', response);
        console.log('response.data', response.data);

        // if (response.data.user) req.session.set('user', response.data.user);
        // if (response.data.jwt) req.session.set('jwt', response.data.jwt);
        // await req.session.save();
        res.status(response.status).json({ statusText: response.statusText });
    } catch (error) {
        console.log('error', error.response.data);
        res.status(error.response?.data?.statusCode || 500).send({
            statusCode: error.response?.data?.statusCode || 500,
            message: error.response?.data?.message || error.message
        });
    }
});
