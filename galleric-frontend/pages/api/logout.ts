import { NextApiResponse } from 'next';

import withSession from '../../lib/session';
import { NextApiRequestWithIronSession } from '../../types/nextapirequest';

export default withSession(async (req: NextApiRequestWithIronSession, res: NextApiResponse) => {
    req.session.destroy();
    res.end();

    // TODO: Check this
    // Note: If you use req.session.destroy() in an API route, you need to make sure this route will not be cached.
    // To do so, either call this route via a POST request fetch("/api/logout", { method: "POST" })
    //or add cache-control: no-store, max-age=0 to its response.
});
