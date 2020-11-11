const data = require("../data/movies.json")
console.log("con")

exports.movies = (req, res) => {
    console.log("here")
    try {


        return res.json({ data });


    }
    catch (e) {
        console.log(e);
        return res.status(500).json({ status: 500, message: "error happened" });
    }

}