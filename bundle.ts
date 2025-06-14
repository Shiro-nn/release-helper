import * as esbuild from "https://deno.land/x/esbuild@v0.25.4/mod.js";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.1";

await esbuild.initialize();

await esbuild.build({
    entryPoints: ["main.ts"],
    bundle: true,
    format: "cjs",
    platform: "node",
    plugins: [
        ...denoPlugins({
            loader: "native",
        }),
    ],
    outfile: "dist/out.js",
});

esbuild.stop();