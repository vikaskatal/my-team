import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../../redux'
import uniqid from 'uniqid'

function AddUser (props) {
    const [userName, setUserName] = useState('');
    const [userDesc, setUserDesc] = useState('');
    const [reqError, setReqError] = useState(false);

    const addUserFun = () => {
        if(userName.length == 0){
            setReqError(true);
        }else{
            setReqError(false);
            props.addUserFun(userName, userDesc, props.activeTeamId);
            setUserName('');
            setUserDesc('');
        }
    };

    return (
        <li className="card__add-user">
            <div className="card__ele">
                <div className="label">Name</div>
                <input  className="input" maxLength={70} type="text" placeholder="Enter Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
                {reqError ? <p className="input-error">Required Feild</p> : ''}
            </div>

            <div className="card__ele">
                <div className="label">Description</div>
                <textarea className="textarea" type="text" placeholder="Enter Description" value={userDesc} onChange={(e) => setUserDesc(e.target.value)} />
            </div>

            <div className="card__ele">
                <div className="btn" onClick={addUserFun}>Add User</div>
            </div>
        </li>
    )
}

const mapStateToProps = state => {
    const { users } = state;
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        addUserFun: (userName, userDesc, activeTeamId) => dispatch( addUser({
            id: uniqid(),
            teamId: activeTeamId,
            name: userName,
            description: userDesc
        }))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUser)
