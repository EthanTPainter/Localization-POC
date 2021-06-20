import React, { FunctionComponent } from "react";
import { Route, HashRouter as Router } from "react-router-dom";
const ReactDOM = require("react-dom");

import { App } from "./App";

const Routing: FunctionComponent = () => {
    return (
        <Router>
            <Route exact path="/" component={App} />
        </Router>
    );
};

ReactDOM.render(<Routing />, document.getElementById("root"));