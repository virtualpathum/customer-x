import React, { Component } from 'react'
import ApiService from "../service/AppService";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

class ListUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            message: null
        }
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        this.reloadUserList();
    }

    reloadUserList() {
        ApiService.fetchUsers()
            .then((res) => {
                this.setState({users: res.data})
            });
    }

    deleteUser(userId) {
        ApiService.deleteUser(userId)
           .then(res => {
               this.setState({message : 'User deleted successfully.'});
               this.setState({users: this.state.users.filter(user => user.id !== userId)});
           })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }

    render() {
        return (
            <div>
            <Typography variant="h4" style={style}>User Details</Typography>
            <Button variant="contained" color="primary" onClick={() => this.addUser()}>
                Add User
            </Button>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Box fontWeight="fontWeightBold">Id</Box></TableCell>
                        <TableCell><Box fontWeight="fontWeightBold">FirstName</Box></TableCell>
                        <TableCell align="left"><Box fontWeight="fontWeightBold">LastName</Box></TableCell>
                        <TableCell align="left"><Box fontWeight="fontWeightBold">UserName</Box></TableCell>
                        <TableCell align="left"><Box fontWeight="fontWeightBold">Email</Box></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.users.map(row => row === null ? '' :  (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="left">{row.firstName}</TableCell>
                            <TableCell align="left">{row.lastName}</TableCell>
                            <TableCell align="left">{row.userName}</TableCell>
                            <TableCell align="left">{row.email}</TableCell>
                            <TableCell align="left" onClick={() => this.editUser(row.id)}><CreateIcon /></TableCell>
                            <TableCell align="left" onClick={() => this.deleteUser(row.id)}><DeleteIcon /></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </div>
        );
    }

}

const style ={
    display: 'flex',
    justifyContent: 'center'
}

export default ListUser;