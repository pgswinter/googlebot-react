import React from 'react'
import {connect} from 'react-redux';
import { FETCH_POSTS } from '../redux/actions';

class ListData extends React.Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {loading, items} = this.props.users;
        const listUsers = loading === false ? items.map((user) => <li key={user.id}>{user.email}</li>) : null;
        return (
            <div>
                {listUsers}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.entities.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch({type: FETCH_POSTS})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListData);