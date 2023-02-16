import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"

import './index.css'

interface IProps {
    title: string,
    children: React.ReactNode
}

const Layout = ({ title, children }: IProps) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <div className="container">
                    {children}
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Layout