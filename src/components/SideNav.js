import React from 'react'
import { NavLink } from 'react-router-dom'

const Navstyle = ({ isActive }) => {
    return {
        fontWeight: isActive ? 'bold' : 'normal',
        color: isActive ? '#FFC364' : 'white',
        marginTop: '5px'

    }
}

const SideNav = () => {
    return (
        <div className='bg-[#346ccb] text-white px-10 rounded-md min-w-max h-full'>
            <ul className='flex flex-col text-center py-3'>
                <NavLink style={Navstyle} to={'/'}>Home</NavLink>
                <NavLink style={Navstyle} to={'/portList'}>My Funds</NavLink>
            </ul>
        </div>
    )
}

export default SideNav