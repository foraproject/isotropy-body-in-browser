/* @flow */
import type { KoaContextType } from "./flow/koa-types.js";

const any = async function(context: KoaContextType) : Object {
  const req = context.req || context;
  const body = req.__getBody();
  return (typeof body === "string") ? body : Object.assign({}, body);
}

export default any;
