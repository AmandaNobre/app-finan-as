import { IonButton, IonGrid, IonLabel, IonRow } from "@ionic/react"
import Layout from "../../components/layout"
import { wallet, airplane } from 'ionicons/icons';
import InputCustom from "../../components/input";
import { useContext, useEffect, useState } from "react";
import SettingsServer from "./settingsServer";
import { UserContext } from "../../context/UserContext";

const Settings = () => {

    const [monthlyIncome, setMonthlyIcome] = useState("0,00")
    const [leisure, setLeisure] = useState("0,00")

    const { user } = useContext(UserContext)

    const saveSettings = async () => {
        try {
            const paylod = {
                id: 1,
                name: "Amanda",
                monthlyIncome: monthlyIncome,
                leisure: leisure
            }
            await SettingsServer.updateSettings(paylod)
        } catch { }
    }

    useEffect(() => {
        if (user) {
            setMonthlyIcome(user.monthlyIncome)
            setLeisure(user.leisure)
        }
    }, [user])

    return (
        <Layout title="Configurações">
            <IonGrid>
                <IonRow>
                    <IonLabel position="stacked">Renda mensal</IonLabel>
                    <InputCustom
                        icon={wallet}
                        type='number'
                        value={monthlyIncome}
                        setValue={setMonthlyIcome}
                    />
                </IonRow>
                <IonRow>
                    <IonLabel position="stacked">Gastos com lazer</IonLabel>
                    <InputCustom
                        icon={airplane}
                        type='number'
                        value={leisure}
                        setValue={setLeisure}
                    />
                </IonRow>
            </IonGrid>
            <IonButton expand="full" shape="round" onClick={saveSettings} >Salvar</IonButton>
        </Layout>
    )
}

export default Settings