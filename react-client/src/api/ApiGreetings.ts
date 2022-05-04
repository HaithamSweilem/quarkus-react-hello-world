import Axios from "./Axios";

const ApiGreetings = {

    hello: async () => {

        // call the hello API
        return Axios.get(`hello`)

    },
}

export default ApiGreetings
