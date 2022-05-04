import React, {useState} from 'react';
import './App.css';
import HelloButton from "./components/HelloButton";
import {AxiosResponse} from "axios";

function App() {

    const [text, setText] = useState("")

    const onCallHello = (response: AxiosResponse) => {
        console.info("Response: ", response)
        setText(response.data)
    }

    return (
        <div className="App">

            Click the button: <HelloButton onCallHello={onCallHello}/>

            <h3>
                <p>
                    Text is: '{text}'
                </p>
            </h3>
        </div>
    );
}

export default App;
