import React from 'react'
import { connect } from 'react-redux'
import uniqid from 'uniqid'
import { selectTeam } from '../../redux'

function Teams (props) {
    return (
        <>
            <h2>Teams</h2>
            <ul>

                {
                    props.teams.map((ele, index) =>  <li onClick={() => props.viewUsersOfTeam(ele.id)}
                                                         className={props.activeTeam === ele.id ? 'isActive' : ''}
                                                         key={ele.id}>{ele.name}</li>)
                }
            </ul>
        </>
    )
}

const mapStateToProps = state => {
    const { teams } = state;
    return {
        teams: teams.list,
        activeTeam: teams.activeTeam
    }
};

const mapDispatchToProps = dispatch => {
    return {
        viewUsersOfTeam: teamId => dispatch(selectTeam(teamId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Teams)
