import baseApi from "../../api";
import IWishlist from "../../interfaces/IWishlist";

class WishlistServer {
    static addList(payload: IWishlist) {
        return baseApi.post('/wish', payload)
    }

    static getList(idUser: number) {
        return baseApi.get(`/wish?idUser=${idUser}`)
    }
}

export default WishlistServer