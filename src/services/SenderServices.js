import axios from "axios";

const SENDER_API_BASE_URL="http://localhost:8080/api/v1/internal_data"

class SenderServices{

    findSender(id){
        return axios.get(SENDER_API_BASE_URL+'/'+id);
    }
    updateSender(id,sender){
        return axios.put(SENDER_API_BASE_URL+'/'+id,sender);
    }
}

export default new SenderServices();