const path = require("path");
const message = require("../messages/userMessage");
const commonFun = require("../common/com");
const directoryPath = path.join(__dirname, '..');
const filePath = path.join(directoryPath, 'movies.json');

const movieList = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    commonFun.readFile(filePath).then((movies) => {
        const paginatedMovies = movies.slice(startIndex, endIndex);        
        return res.json({
            page,
            limit,
            totalMovies: movies.length,
            totalPages: Math.ceil(movies.length / limit),
            data: paginatedMovies
        });  
    })
}

module.exports = {
    movieList
}
