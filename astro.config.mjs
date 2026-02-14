// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import react from "@astrojs/react";
import preload from "astro-preload";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig( {
	vite: {
		plugins: [ tailwindcss() ],
	},

	adapter: netlify(),
	integrations: [ react(), preload(), compressor() ],
} );
