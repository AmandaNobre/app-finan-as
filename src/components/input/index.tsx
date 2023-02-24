import { IonIcon } from '@ionic/react';
import styled from 'styled-components'

interface IProps {
    icon: string,
    type: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const Input = styled.input`
  margin: 0.5em;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
 }
`;


const Div = styled.div`
  width: 100%;
  padding: 0 1em;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid black;
  border-radius:30px;
`;

const InputCustom = ({ icon, type, value, setValue }: IProps) => {

    //Price
    function RemoveChar(st1: string, st2: string) {
        let vr, fl;
        vr = "";
        for (var ct1 = 0; ct1 < st1.length; ct1++) {
            fl = 0;
            for (var ct2 = 0; ct2 < st2.length; ct2++) {
                if (st1.charAt(ct1)=== st2.charAt(ct2)) fl = 1;
            }
            if (fl=== 0) {
                vr = vr + st1.charAt(ct1);
            }
        }
        return vr;
    }

    function Check(KeyPress: { keycode: any; }) {
        let ke, rt;
        ke = KeyPress.keycode;
        if (ke !== 9 && ke !== 8) {
            rt = true;
        } else {
            rt = false;
        }
        return rt;
    }

    function ValidChar(CurrentStr: string, ValidStr: string) {
        var strValidos = ValidStr;
        var strCurrent = CurrentStr;
        var loop = true;
        while (loop) {
            loop = false;
            for (let i = 0; i <= strCurrent.length - 1; i++) {
                if (strValidos.indexOf(strCurrent.charAt(i))=== -1) {
                    strCurrent =
                        strCurrent.substr(0, i) +
                        strCurrent.substr(i + 1, strCurrent.length - i);
                    loop = true;
                }
            }
        }

        return strCurrent;
    }

    function MoneyFormat(Fld: any, KeyPress: any) {
        let tecla = KeyPress.keyCode;
        let vr, tm, rt;
        if ((tecla < 33 || tecla > 40) && tecla !== 9 && tecla !== 16) {
            if (Check(KeyPress)) {
                let ob = Fld;
                vr = RemoveChar(ob.value, ",. ");
                vr = ValidChar(vr, "1234567890");
                tm = vr.length;

                if (tm > 3 && vr.charAt(0)=== "0") vr = vr.substr(1, vr.length);
                if (tm=== 1) vr = "00" + vr;
                if (tm=== 2) vr = "0" + vr;
                tm = vr.length;
                rt = "";

                for (var ct1 = 0; ct1 < tm; ct1++) {
                    for (var ct2 = 1; ct2 < Math.abs(tm / 2.95) - 1; ct2++)
                        if (ct1=== tm - 2 - ct2 * 3) rt = rt + ".";
                    if (ct1=== tm - 2) rt = rt + ",";
                    rt = rt + vr.substr(ct1, 1);
                }
                ob.value = rt;
            }
        }
    }

    return (
        <Div>
            <IonIcon slot="start" md={icon} />
            <Input
                onKeyUp={(event) => type === "number" && MoneyFormat(event.target, event)}
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </Div>
    )
}

export default InputCustom