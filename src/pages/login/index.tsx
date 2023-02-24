import { useContext, useState } from "react"
import InputCustom from "../../components/input"
import { person } from 'ionicons/icons';
import { IonButton } from "@ionic/react";
import LoginServer from "./loginServer";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router";

const Login = () => {

    const [name, setName] = useState("")
    const { setUser } = useContext(UserContext);

    const history = useHistory()

    const clickLogin = async () => {
        try {
            const { data } = await LoginServer.login(name)
            setUser(data)
            history.push("home")
        } catch {
        }
    }

    return (
        <div className="container">
            <InputCustom
                icon={person}
                type='text'
                value={name}
                setValue={setName}
            />
            <IonButton expand="full" shape="round" onClick={clickLogin} >Entrar</IonButton>

        </div>
    )
}

export default Login