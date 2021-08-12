import "./App.css";
import {
    UseStateSample,
    UseInputSample,
    UseTabsSample,
    UseEffectSample,
    UseTitleSample,
} from "./components";

function App() {
    return (
        <div className="App">
            <UseStateSample></UseStateSample>
            <UseInputSample></UseInputSample>
            <UseTabsSample></UseTabsSample>
            <UseEffectSample></UseEffectSample>
            <UseTitleSample></UseTitleSample>
        </div>
    );
}

export default App;
