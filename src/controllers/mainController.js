const axios = require('axios')

const index = async(req, res) => {
        res.render('main/index')
}

// const algo = await fetch('ruta')
// const algoJson = await algo.json()
module.exports = {
    index
}