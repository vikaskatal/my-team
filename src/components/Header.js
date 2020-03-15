import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTeam } from '../redux'
import uniqid from 'uniqid'

function Header (props) {
    const [teamName, setTeamName] = useState('');

    const addTeamFun = () =>{
        if(teamName.length){
            props.addTeamFun(teamName)
            setTeamName('')
        }
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__flex">
                    <h2>my<span>Teams</span></h2>
                    <div className="header__form">
                        <input type="text" placeholder="Enter team name" maxLength={70} value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                        <div className="btn" onClick={addTeamFun}>Add Team</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addTeamFun: (teamName) => dispatch( addTeam({
            id: uniqid(),
            name: teamName
        }))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Header)
