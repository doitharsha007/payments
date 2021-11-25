import axios from "axios";

const TRANSACTION_API_BASE_URL="http://localhost:8080/api/v1/output"

class RECEIVERServices{

    findInstruction(msg){
        return axios.get(TRANSACTION_API_BASE_URL+'/'+msg);
    }
}

export default new RECEIVERServices();