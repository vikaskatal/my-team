import React from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'
import {deleteUser} from '../../redux'

function User (props) {
    const { userData } = props;
    return (
        <>
            <li className="card__user">
                <div className="card__ele">
                    <div className="label">Name</div>
                    <div className="input"> {userData.name}</div>
                </div>

                <div className="card__ele">
                    <div className="label">Description</div>
                    <div className="textarea">
                        {
                            userData.description ? userData.description : <i>No description found</i>
                        }
                    </div>
                </div>
                <div className="card__ele">
                    <div className="btn btn--danger" onClick={() => props.deleteUserFun(userData.id)}>Delete User</div>
                </div>
            </li>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        deleteUserFun: userId => dispatch(deleteUser(userId))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(User)
