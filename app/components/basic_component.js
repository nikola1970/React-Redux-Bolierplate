import React, {Component} from "react";
import {connect} from "react-redux";
import {/*akcija*/} from "../actions";

class BasicComponent extends Component { // Not a presentational component
    
    constructor(props) {
        super(props);
    }
    render(){
        const {dispatch} = this.props;

        return(
            /* html here */
        );
    }
}

export default connect(/* no props to pass so no connect(state => {}) function here*/)(BasicComponent);