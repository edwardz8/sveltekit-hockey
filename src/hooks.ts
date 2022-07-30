import type { GetSession, Handle } from '@sveltejs/kit'
import * as cookie from 'cookie'

import { db } from '$lib/database'

export const handle: Handle = async ({
  event,
  resolve,
}) => {
  const cookieHeader = event.request.headers.get('cookie')
  const cookies = cookie.parse(cookieHeader ?? '')

  if (!cookies.session) {
    return await resolve(event)
  }

  const session = await db.user.findUnique({
    where: { userAuthToken: cookies.session },
  })

  if (session) {
    event.locals.user = { username: session.username }
  }

  return await resolve(event)
}

export const getSession: GetSession = ({ locals }) => {
  if (!locals.user) return {}

  return {
    user: {
      username: locals.user.username,
    },
  }
}

/* 

// ORIGINAL SVELTEKIT USERID COOKIE PARSING // 

import * as cookie from 'cookie';

export const handle: Handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies['userid'] || crypto.randomUUID();

	const response = await resolve(event);

	if (!cookies['userid']) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};
 */