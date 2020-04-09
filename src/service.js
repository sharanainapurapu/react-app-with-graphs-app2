
import {ENDPOINT} from "./constants";

export const app_service = {
    getAPIResponse : function(){
        return fetch(ENDPOINT).then((response) => response.json())
    }
}
