/* @flow */
import type { IncomingMessage } from "isotropy-interfaces/node/http-in-browser";

const asyncBody = async (req: IncomingMessage) : Object => {
  const body = req.__getBody();
  return typeof body === "string" ? body : body.reduce((i, j) => { i[j.fieldname] = j.value; return i; }, {});
}

export default asyncBody;
