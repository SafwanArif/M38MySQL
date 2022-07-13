const Movie = require("./table");

exports.addMovie = async (movieObj) => {
    try {
        const response = await Movie.create(movieObj);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovie = async () => {
    try {
        const selected = await Movie.findAll();
        console.log("all movies:", JSON.stringify(selected, null, 2));
    } catch (error) {
        console.log(error);
    }
}

// update movie function by title
exports.updateT = async (movieObj) => {
    try {
        await Movie.update({ 
            title: movieObj.newtitle }, 
        { where: { 
            title: movieObj.title 
        } 
    });
        console.log("Updated movie");
    } catch (error) {
        console.log("update title",error)
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.destroy({ where: {title: movieObj.title}});
    } catch (error) {
        console.log(error);
    }
}