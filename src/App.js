import React, {Component} from 'react';
import './App.css';

class App extends Component {
    componentDidMount(){
        var name = window.util.getSearchByName("aaaa");
        console.log(name);
    }
    render() {
        return (
            <div>
                <a href="tel:400-0000-688">点我呼叫车主</a>
            </div>
        );
    }
}

export default App;
