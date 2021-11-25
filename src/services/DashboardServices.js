import axios from "axios";

const DASHBOARD_API_BASE_URL="http://localhost:8080/api/v1/dashboard"

class DashboardServices{

    addToDash(record){
        return axios.get(DASHBOARD_API_BASE_URL);
    }
    getDash(){
        return axios.put(DASHBOARD_API_BASE_URL);
    }
}

export default new DashboardServices();