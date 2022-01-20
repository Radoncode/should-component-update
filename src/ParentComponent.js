import { Component } from "react";
import SimpleComponent from "./SimpleComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'SpiderMan'
         };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
         console.log('je suis dans shouldComponentUpdate ');

         console.log(this.state.name);
         console.log(nextState);
         if ( this.state.name !== nextState.name) {
             return true;
         }
         return false;
    }

    changeToBatman = () => {
        this.setState({
            name: 'Batman'
        })
    }
    render() {

        console.log('%c RENDER() DU COMPOSANT PARENT', 'color: red')
        return (
            <div>
                <SimpleComponent />
                <button onClick={this.changeToBatman}>Changer en batMan</button>
            </div>
        );
    }
}

export default ParentComponent;