const urlNew = require("./short_url");
const Link = require("./schema");
const route = require("express").Router();

const verifyLink = async (req, res, next) => {
    let _url = req.body.url;
    if (!_url) res.send("Requisição sem corpo! Tente novamente.");

    let link = await Link.findOne({ url_old: _url });
    console.log(link);
    if (link)   res.json("http://localhost:3000/" + link.url_new);
    else next();
}


const addLink = async (req, res) => { //adiciona o link e gera new link short
    let _url = req.body.url;
    let url = urlNew();

    try {
        let link = new Link({
            url_old: _url,
            url_new: url
        })
        await link.save()
            .then(() => res.json("http://localhost:3000/" + url))
            .catch(() => res.send("Erro ao salvar no banco!"));

    } catch (err) {
        res.send("Erro!");
    }
}


const redirectLink = async (req, res) => {
    const { u } = req.params
    if (!u) res.send("Sem query string no url.");
    console.log(u);

    try {
        let link = await Link.findOne({ url_new: u });
        console.log(link);
        if (!link) res.send("Link nao encontrado.");
        res.redirect(link.url_old);
    } catch (error) {
        res.send("Erro!")
    }
}

module.exports = { addLink, redirectLink, verifyLink };
