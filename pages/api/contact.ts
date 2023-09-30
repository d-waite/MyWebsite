import type { NextApiRequest, NextApiResponse } from 'next'
import { db, user as userTable } from "./db"

type Body = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    inquiry: string;
}

type Data = {
    success: boolean;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    try {
        await db.insert(userTable).values(JSON.parse(req.body));
        return res.status(200).json({ success: true });
    } catch (e) {
        console.error('Error submitting response', e);
        return res.status(500).json({ success: true });
    }
}
