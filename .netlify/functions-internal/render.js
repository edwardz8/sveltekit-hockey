const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","hockeyphone.png","robots.txt","rotorink.jpeg","svelte-welcome.png","svelte-welcome.webp"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".jpeg":"image/jpeg",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-1b97e564.js","imports":["_app/immutable/start-1b97e564.js","_app/immutable/chunks/index-10167abb.js","_app/immutable/chunks/index-b5bef26d.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/7.js')),
			() => Promise.resolve().then(() => require('../server/nodes/8.js')),
			() => Promise.resolve().then(() => require('../server/nodes/9.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "players",
				pattern: /^\/players\/?$/,
				names: [],
				types: [],
				path: "/players",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/players/index.ts.js')),
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "protected",
				pattern: /^\/protected\/?$/,
				names: [],
				types: [],
				path: "/protected",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "todos",
				pattern: /^\/todos\/?$/,
				names: [],
				types: [],
				path: "/todos",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.ts.js')),
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "players/like",
				pattern: /^\/players\/like\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/players/like.ts.js'))
			},
			{
				type: 'endpoint',
				id: "player/id",
				pattern: /^\/player\/id\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/player/id.ts.js'))
			},
			{
				type: 'endpoint',
				id: "auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				names: [],
				types: [],
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/logout/index.ts.js'))
			},
			{
				type: 'page',
				id: "auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				path: "/auth/login",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/login/index.ts.js')),
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/register",
				pattern: /^\/auth\/register\/?$/,
				names: [],
				types: [],
				path: "/auth/register",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/auth/register/index.ts.js')),
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "player/[id]",
				pattern: /^\/player\/([^/]+?)\/?$/,
				names: ["id"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,8],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
