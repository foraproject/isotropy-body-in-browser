const any = async function(context) {
    const req = context.req || context;
    const result = Object.assign({}, req._body);
    return result;
}

export default any;
