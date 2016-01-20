/* @flow */
import type { KoaContextType } from "./flow/koa-types.js";

const any = async function(context: KoaContextType) : Object {
  const req = context.req || context;
  const result = Object.assign({}, req._body);
  return result;
}

export default any;
