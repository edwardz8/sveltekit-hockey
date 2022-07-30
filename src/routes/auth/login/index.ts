import type { RequestHandler } from '@sveltejs/kit'
import * as bcrypt from 'bcrypt'
import * as cookie from 'cookie'

import { db } from '$lib/database'

export const POST: RequestHandler = async ({ request }) => {
    const form = await request.formData()
    const username = form.get('username')
    const password = form.get('password')

    if (
        typeof username !== 'string' ||
        typeof password !== 'string'
    ) {
    return {
        status: 400,
        body: {
            error: 'Enter a valid username and password.'
        }
    }
}

    if (!username || !password) {
        return {
            status: 400,
            body: {
                error: 'username and password are required.'
            }
        }
    }


    const user = await db.user.findUnique({
        where: { username }
    })
    const passwordMatch = user && (await bcrypt.compare(password, user.passwordHash))

    if (!user || !passwordMatch) {
        return {
            status: 400,
            body: {
                error: 'You entered the wrong credentials. Please try again.'
            }
        }
    }

    return {
        status: 200,
        body: {
            user: { username },
            success: 'Success!'
        },
        headers: {
            'Set-Cookie': cookie.serialize(
                'session',
                user.userAuthToken,
                {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: process.env.NODE_ENV === 'production',
                    /* set cookie to expire after one month */
                    maxAge: 60 * 60 * 24 * 30
                }
            )
        }
    }
}