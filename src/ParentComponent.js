import { Component } from "react";
import SimpleComponent from "./SimpleComponent";
import PureComp from "./PureComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: 'SpiderMan'
         };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
         console.log('shouldComponentUpdate() décide TRUE');

         /*console.log(this.state.name);
         console.log(nextState);*/
       // if ( this.state.name !== nextState.name) {
         //    return true;
           //  }
         return true;
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
                <SimpleComponent name={this.state.name}/>
                <PureComp name={this.state.name} />
                <button onClick={this.changeToBatman}>Changer en batMan</button>
            </div>
        );
    }
}

export default ParentComponent;