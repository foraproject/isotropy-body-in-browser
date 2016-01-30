/* @flow */
import type { IncomingMessage } from "./flow/http-types";

const asyncBody = async (req: IncomingMessage) : Object => {
  const body = req.__getBody();
  return (typeof body === "string") ? body : Object.assign({}, body);
}

export default asyncBody;
