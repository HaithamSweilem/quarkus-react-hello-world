import ApiGreetings from "../api/ApiGreetings";
import {AxiosResponse} from "axios";

type HelloButtonProps = {
    onCallHello(response: AxiosResponse): void
}

const HelloButton = ({onCallHello}: HelloButtonProps) => {

    const callHello = async () => {
        const res = await ApiGreetings.hello()
        if (res.status === 200) {
            onCallHello(res);
        } else {
            // TODO: show error
            // ...
            console.error("Failed: ", res)
        }
    }

    return (
        <button onClick={callHello}>Call Hello</button>
    )

}


export default HelloButton;
