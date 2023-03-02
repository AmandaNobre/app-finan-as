import { IonList, IonItem, IonLabel, IonFab, IonFabButton, IonIcon, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonGrid, IonRow } from "@ionic/react"
import Layout from "../../components/layout"
import { useContext, useEffect, useState } from "react";
import InputCustom from "../../components/input";
import { bag, add, wallet, ellipsisVertical } from 'ionicons/icons';
import { UserContext } from "../../context/UserContext";
import IWishlist from "../../interfaces/IWishlist";
import WishlistServer from "./WishlistServer";

const Wishlist = () => {

    const { user } = useContext(UserContext)

    const [open, setOpen] = useState(false)
    const [item, setItem] = useState("")
    const [price, setPrice] = useState("")

    const [wishlist, setWishlist] = useState<IWishlist[]>([])

    const addItem = async () => {
        try {
            if (user) {
                const payload = {
                    id: wishlist.length + 1,
                    idUser: user.id,
                    name: item,
                    price: price,
                    marquer: false
                }
                await WishlistServer.addList(payload)
                closeModal()
            }
        } catch { }
    }

    const returnList = async () => {
        try {
            if (user) {
                const { data } = await WishlistServer.getList(user.id)
                setWishlist(data)
            }
        } catch { }
    }

    const closeModal = () => {
        setOpen(false)
        returnList()
        setItem("")
        setPrice("")
    }

    useEffect(() => {
        returnList()
    }, [user])

    return (
        <Layout title="Lista de desejos">
            <IonList>
                {wishlist.map((wish, index) => (
                    <IonItem key={index}>
                        <IonLabel>{wish.name}</IonLabel>
                        <IonButtons slot="end"><IonIcon icon={ellipsisVertical}></IonIcon>
                        </IonButtons>
                    </IonItem>
                ))}
            </IonList>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton onClick={() => setOpen(true)}>
                    <IonIcon icon={add}></IonIcon>
                </IonFabButton>
            </IonFab>


            <IonModal isOpen={open}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Adicionar item</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={closeModal}>Fechar</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonLabel position="stacked">Nome</IonLabel>
                            <InputCustom
                                icon={bag}
                                type='text'
                                value={item}
                                setValue={setItem}
                            />
                        </IonRow>
                        <IonRow>
                            <IonLabel position="stacked">Valor</IonLabel>
                            <InputCustom
                                icon={wallet}
                                type='number'
                                value={price}
                                setValue={setPrice}
                            />
                        </IonRow>
                    </IonGrid>
                    <IonButton
                        color={"primary"}
                        expand="full"
                        shape="round"
                        onClick={addItem}
                    >
                        Adiconar
                    </IonButton>
                </IonContent>
            </IonModal>
        </Layout>
    )
}

export default Wishlist