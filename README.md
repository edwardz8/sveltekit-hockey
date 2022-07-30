# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

## Prisma with Svelte and TypeScript

Transpiling the code may require:

npm i -D ts-node @types/node

"prisma": {
  "seed": "node --loader ts-node/esm prisma/seed.ts"
}

npx prisma db seed

```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.


### Notes

Files starting with _ and __ are ignored as pages in SvelteKit. 

When global styles folder is created and alias is set at $root in svelte.config you are able to use imports as follows:

// routes/__layout.svelte 

<script lang="ts">
	import '$root/styles/global.css'
</script>