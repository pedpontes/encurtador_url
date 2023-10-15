const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    url_old: { type: String, require: true },
    url_new: { type: String, require: true }
}, { expires: "30s" });

const Link = mongoose.model("Link", schema);

module.exports = Link;