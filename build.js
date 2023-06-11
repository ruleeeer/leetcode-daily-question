import {build} from "esbuild";

build({
    entryPoints: ['./src/index.ts'],
    platform: 'node',
    target: 'node16',
    bundle: true,
    format: 'esm',
    outfile: './dist/index.mjs',
    minify: true
}).catch(() => process.exit(1));

build({
    entryPoints: ['./src/index.ts'],
    platform: 'node',
    target: 'node16',
    bundle: true,
    format: 'cjs',
    outfile: './dist/index.cjs',
    minify: true
}).catch(() => process.exit(1));

