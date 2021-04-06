import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { NextApiRequestExtended } from '../../types/nextapirequest';

export default withSession(async (req: NextApiRequestExtended, res: NextApiResponse) => {
    req.session.destroy();
    res.end();
});
