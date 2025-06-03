const esbuild = require('esbuild')
import { obfuscatorPlugin } from 'esbuild-obfuscator'
const IS_WATCH_MODE = process.env.IS_WATCH_MODE

const entries = [
    {
        target: 'node16',
        entryPoints: ['server/main.ts'],
        platform: 'node',
        outfile: './dist/server/main.js'
    },
    {
        target: 'es2020',
        entryPoints: ['client/main.ts'],
        platform: 'node',
        outfile: './dist/client/main.js'
    }
]

const makeBundle = async () => {
    try {
        const baseOptions = {
            logLevel: 'info',
            bundle: true,
            charset: 'utf8',
            minifyWhitespace: true,
            absWorkingDir: process.cwd(),
            metafile: true,
            plugins: [
                obfuscatorPlugin({
                    compact: true,
                    controlFlowFlattening: true,
                    splitStrings: true,
                    splitStringsChunkLength: 12,
                    stringArray: true,
                    stringArrayRotate: true,
                    stringArrayShuffle: true,
                    identifierNamesGenerator: 'hexadecimal',
                    debugProtection: true,
                    renameGlobals: true,
                    numbersToExpressions: true
                })
            ]
        }

        for (const targetOpts of entries) {
            const mergedOpts = { ...baseOptions, ...targetOpts }

            const ctx = await esbuild.context(mergedOpts)

            if (IS_WATCH_MODE) {
                await ctx.watch()   
            }
        }
    } catch (e) {
        console.log('[ESBUILD] Build failed with error')
        console.error(e)
        process.exit(1)
    }
}

makeBundle().catch(() => process.exit(1))