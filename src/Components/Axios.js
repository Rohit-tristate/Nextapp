const { default: axios } = require("axios");


const Api=axios.create({
    baseURL: "http://localhost:3000/"
})

export default Api