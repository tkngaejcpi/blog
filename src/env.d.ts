/* cloudflare */
type KVNamespace = import('@cloudflare/workers-types').KVNamespace;

type CloudflareEnv = {
	KV: KVNamespace;
};

type Runtime = import('@astrojs/cloudflare').Runtime<CloudflareEnv>;

declare namespace App {
	interface Locals extends Runtime {}
}

/* env */
interface ImportMetaEnv {
	readonly CLOUDFLARE_WEB_STATISTICS_TOKEN: string;
	readonly CLOUDFLARE_TURNSTILE_SITEKEY: string;
	readonly CLOUDFLARE_TURNSTILE_SECRETKEY: string;

	readonly BOARD_KV_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
