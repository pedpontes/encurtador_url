
module.exports = () => {
    var alfa = "abcdefghijklmnopqrstuvwxyz".split("");

    var endpoint = [];
    for (let i = 0; i < 10; i++)
        endpoint.push(alfa[Math.floor(Math.random() * 26)]);
    
    var url_new = endpoint.join("");
    return url_new;
}