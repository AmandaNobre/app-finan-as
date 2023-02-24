import baseApi from "../../api"
import ISettings from "../../interfaces/ISettings"

class SettingsServer{
    static updateSettings(payload: ISettings){
        return baseApi.put('user?id=1', payload)
    }
}

export default SettingsServer