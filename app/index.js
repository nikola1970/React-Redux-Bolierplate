import ReactDOM from "react-dom";
import {Provider} from "react-redux";

// import app here 

const store = require("./store/store").configure();

require("bootstrap/dist/css/bootstrap.min.css");
require("./styles/styles.scss");


ReactDOM.render(
    <Provider store={store}>
        {/* app goes here */} 
    </Provider>,
    document.getElementById("app")
);

