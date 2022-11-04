import React, { useState } from 'react'
import axios from 'axios'
import Fund from './Fund'

const PortfolioPage = () => {
    const [funds, setFunds] = useState([])
    const [fund, setFund] = useState('')
    const [alert, setAlert] = useState(false)
    function search(e) {
        e.preventDefault()
        axios.get(`https://api.mfapi.in/mf/search?q=${fund}`)
            .then(({ data }) => setFunds(data))
    }
    function toggleAlert() {
        setAlert(pre => !pre)
        setTimeout(() => {
            setAlert(pre => !pre)
        }, 2000);
    }
    return (
        <div className='w-screen bg-[#fbfcfd]'>
            {alert && <div className="alert alert-success shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>Succesfully added fund to portolios!!</span>
                </div>
            </div>}
            <form onSubmit={search} className='w-2/5 mt-4 self-center'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative ml-6">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" value={fund} onChange={({ target }) => setFund(target.value)} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search fund here.." required />
                    <button type="submit" onClick={search} className="text-white absolute right-2.5 bottom-2.5 bg-[#346CCB] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                </div>
            </form>
            <div className='flex flex-col'>
                {funds.map(fd => <Fund fName={fd.schemeName} fCode={fd.schemeCode} key={fd.schemeCode} alert={toggleAlert} />)}
            </div>

        </div>
    )
}

export default PortfolioPage