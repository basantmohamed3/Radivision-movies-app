const express = require("express")
const app = express()

const moviesRoutes = require("./routes/moviesRoutes")
const logger = require("morgan")
const port = process.env.PORT || 4000


app.use((req, res, next) => {
    res.header('Content-Type', 'application/json');
    next();
});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("../web/build"))

}
app.use(logger('dev'))
app.use('/', moviesRoutes)
app.listen(port, () => {
    console.log("server is on ")
}).on("error", (e) => {
    console.log("Failed to conenct", e)
})