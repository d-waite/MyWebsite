import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer';

const email = process.env.EMAIL_ADDRESS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: process.env.EMAIL_PASSWORD,
    }
});

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
        await transporter.sendMail({
            from: email,
            to: email,
            subject: 'Inquiry Submitted on Your Website!',
            // spaces two
            text: JSON.stringify(req.body),
        });
        return res.status(200).json({ success: true });
    } catch (e) {
        console.error('Error submitting response', e);
        return res.status(500).json({ success: true });
    }
}
