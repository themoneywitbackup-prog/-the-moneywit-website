declare namespace NodeJS {
	//use at enviroment.d.ts
	interface ProcessEnv {
		NODE_ENV: "development" | "production";
		CONTENTFUL_SPACE_ID: string;
		CONTENTFUL_ACCESS_TOKEN: string;
	}
}
