// Registers the resolver hook that lets plain `node` run this project's
// TypeScript files directly. Node 22+ strips type annotations itself; the
// hook only fills in the file extensions our imports leave out.
//
// Usage: node --import ./scripts/register-ts.mjs scripts/seed-mcq.ts
import { register } from "node:module";

register("./ts-resolve-hook.mjs", import.meta.url);
