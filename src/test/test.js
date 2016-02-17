import __polyfill from "babel-polyfill";
import should from "should";
import XMLHttpRequest from "./xml-http-request";
import httpModule from 'isotropy-http-in-browser';
import parse from "../isotropy-body-in-browser";

describe('parse(req, opts)', () => {
  it('should parse form', async () => {
    const req = request([
      { type: "file", fieldname: "foo", value: { bar: 'baz' } }
    ]);
    const body = await parse(req);
    body.foo.bar.should.equal('baz');
  });

  it('should parse json', async() => {
    const req = request([
      { type: "file", fieldname: "foo", value: { bar: 'baz' } }
    ]);
    const body = await parse(req);
    body.foo.bar.should.equal('baz');
  });

  it('should parse text', async() => {
    const req = request('hello world');
    const body = await parse(req);
    body.should.equal('hello world');
  });
});

function request(obj) {
  const req = new httpModule.IncomingMessage();
  req.__setBody(obj);
  return req;
}
