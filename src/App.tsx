import React, { FunctionComponent } from "react";
import { History } from "history";

type AppProps = {
    history: History;
};

export const App: FunctionComponent<AppProps> = ({ history }) => {
    return <div id="app">Content Here!</div>
};