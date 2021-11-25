import axios from "axios";

const RECEIVER_API_BASE_URL="http://localhost:8080/api/v1/receiver_data"

class RECEIVERServices{

    findBic(code){
        return axios.get(RECEIVER_API_BASE_URL+'/'+code);
    }
}

export default new RECEIVERServices();