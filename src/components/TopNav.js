import React from 'react'
import { NavLink } from 'react-router-dom'

const Navstyle = ({ isActive }) => {
    return {
        color: isActive ? '#fdc265' : 'white',
        marginLeft: '12px'
    }
}
const TopNav = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="navbar-start ml-3">
                <div className='text-white'><NavLink style={Navstyle} to={'/'} className='mr-2'>Home</NavLink></div>
                <div className='text-white'><NavLink style={Navstyle} to={'/portList'}>My Portfolio</NavLink></div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl text-white">Mutual Fund Assignment</a>
            </div>

        </div>
    )
}

export default TopNav