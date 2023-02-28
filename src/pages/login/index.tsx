import { useContext, useState } from "react"
import InputCustom from "../../components/input"
import { person } from 'ionicons/icons';
import { IonButton, IonContent, IonPage } from "@ionic/react";
import LoginServer from "./loginServer";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router";

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import './index.css'

const Login = () => {

    const [name, setName] = useState("")
    const { setUser } = useContext(UserContext);

    const history = useHistory()

    const clickLogin = async () => {
        try {
            const { data } = await LoginServer.login(name)
            setUser(data)
            history.push("home")
        } catch {}
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="logo">
                    <RiMoneyDollarCircleFill color="white" size={100} />
                </div>
                <div className="formLogin">
                    <InputCustom
                        icon={person}
                        type='text'
                        value={name}
                        setValue={setName}
                    />
                    <IonButton
                        color={"primary"}
                        expand="full"
                        shape="round"
                        onClick={clickLogin}
                    >
                        Entrar
                    </IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Login