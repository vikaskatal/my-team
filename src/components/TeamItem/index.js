import React from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'
import AddUser from "./AddUser"
import User from "./User";

function TeamItem (props) {
    return (
        <>
            <h2>Team: {props.teamName}</h2>
            <ul className="card">
                <AddUser activeTeamId={props.activeTeamId}/>
                {
                    props.users.map((ele, index) =>  <User key={ele.id} userData={ele} />)
                }
            </ul>
        </>
    )
}


const mapStateToProps = state => {
    const { users } = state;
    const { teams } = state;
    return {
        users: users.list.filter(ele => ele.teamId == teams.activeTeam),
        teams: teams.list,
        teamName: teams.list.find(ele => ele.id == teams.activeTeam).name,
        activeTeamId: teams.activeTeam
    }
};


export default connect(
    mapStateToProps,
    null
)(TeamItem)
