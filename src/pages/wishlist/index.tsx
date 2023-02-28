import { IonRow, IonGrid, IonLabel } from "@ionic/react"
import Layout from "../../components/layout"

const Wishlist = () => {
    return (
        <Layout title="Lista de desejos">
            <IonGrid>
                <IonRow>
                    <IonLabel position="stacked">Renda mensal</IonLabel>
                </IonRow>
            </IonGrid>
        </Layout>
    )
}

export default Wishlist