
import {build} from "esbuild";
build({
    entryPoints: ['./src/index.ts'],
    outfile: './dist/index.mjs',
    platform: 'node',
    target: 'node16',
    bundle: true,
    format:"esm",
    // minify:true
}).catch(() => process.exit(1));
