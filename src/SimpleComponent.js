import { Component } from "react";

class SimpleComponent extends Component {
    
    render() {

        console.log('%c render() du composant enfant simple', 'color: blue')
        return (
            <div>
                Bonjour
            </div>
        );
    }
}

export default SimpleComponent;