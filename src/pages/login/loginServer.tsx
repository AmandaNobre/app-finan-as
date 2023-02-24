import baseApi from "../../api"

class LoginServer {
    static login(user: string) {
        return baseApi.get(`user?name=${user}`)
    }
}

export default LoginServer