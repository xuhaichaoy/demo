import React from "react"
import Index from "../page/web/index/index"
// import Admin from "../page/admin/index/index"
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route path="/" component={Index} />
                    {/* <Route path="/admin" component={Admin} /> */}
                </div>
            </Router>
        )
    }
}

export default App