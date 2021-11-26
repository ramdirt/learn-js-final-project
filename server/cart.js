let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};
let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};
let remove = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    if (find.quantity > 1) {
        find.quantity -= req.body.quantity;
        return JSON.stringify(cart, null, 4);
    } else {
        const idx = cart.contents.findIndex(el => el.id_product === +req.params.id)
        cart.contents.splice(idx, 1)
        return JSON.stringify(cart, null, 4);

    }
    
}

module.exports = {
    add,
    change,
    remove
};