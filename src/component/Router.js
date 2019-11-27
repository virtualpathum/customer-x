import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUser from "../user/ListUser";
import AddUser from "../user/AddUser";
import EditUser from "../user/EditUser";
import React from "react";

const AppRouter = () => {
    return(
        <div style={style}>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}>React User Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListUser} />
                        <Route path="/users" component={ListUser} />
                        <Route path="/add-user" component={AddUser} />
                        <Route path="/edit-user" component={EditUser} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style={
    marginTop:'20px'
}


export default AppRouter;