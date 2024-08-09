const { default: axios } = require("axios");

"responsive update"
const Api=axios.create({
    baseURL: "http://localhost:3000/"
})

export default Api