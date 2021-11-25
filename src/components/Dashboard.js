import React from 'react';
import { Component } from 'react';
import DashboardServices from '../services/DashboardServices'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={
            dash:[]
        }
    }
    componentDidMount(){
        DashboardServices.getDash().then((res)=>{
            this.setState({dash:res.data});
            console.log(this.state.dash);
        })
    }

    render(){
    return (
        <div>
            <h2 className="text-center">Recent Transactions</h2>
            <div className="row">
                <table align="center" className="table table-striped table bordered w-75">
                    <thead className="dark">
                        <tr>
                            <th>Customer Id</th>
                            <th>Sender</th>
                            <th>Receiver</th>
                            <th>Receiver Institution</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.dash.map(
                            dash=>
                            <tr key={dash.id}>
                                <td>{dash.senderid}</td>
                                <td>{dash.sender}</td>
                                <td>{dash.receiver}</td>
                                <td>{dash.receiverinstitution}</td>
                                <td>{dash.amount}</td>
                                <td>{(dash.status)?
                                <p className="text-success">Success</p>:
                                <p className="text-danger">Failed</p>
                                }</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
}

export default Dashboard;