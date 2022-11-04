
import axios from 'axios'
import React, { useState } from 'react'

const MyPorfolioFund = ({ id, fName, nav }) => {
    const [fund, setFund] = useState({ meta: {} })

    function getFundDetails(id) {
        axios.get(`https://api.mfapi.in/mf/${id}`)
            .then(({ data }) => {
                setFund(data)
            })
    }
    function addAsset() {
        axios.patch(`http://localhost:4000/portfolios/${id}`, { nav: nav + 1 })
    }
    function deleteAsset() {
        if (nav > 1)
            axios.patch(`http://localhost:4000/portfolios/${id}`, { nav: nav - 1 })
        else
            axios.delete(`http://localhost:4000/portfolios/${id}`)
    }

    return (
        <>
            <label className='bg-white p-3 mb-2 w-4/5 block cursor-pointer drop-shadow-md min-h-2 rounded-md mx-5 mt-5' htmlFor={`my-modal${id}`} onClick={() => getFundDetails(id)}>
                <div className='flex justify-between items-center'>
                    <div className='font-bold text-black'>{fName}</div>
                    <div className='mr-10 bg-[#346ccb] text-white p-3 rounded-2xl h-15'> Allocated Units: {nav}</div>
                </div>
            </label>

            <input type="checkbox" id={`my-modal${id}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <p className='font-bold text-center text-black'>{fName}</p>
                    <div className='border-2 border-[#716D7C] rounded-md p-3 mt-3'>
                        <div className='text-gray-600'>{fund.meta.scheme_category}</div>
                        <div className='text-gray-600'>{fund.meta.scheme_type}</div>
                        <div className='text-gray-600'>{fund.meta.fund_house}</div>
                        <div className='text-gray-600'>Units allocated - {nav}</div>
                    </div>
                    <div className="modal-action flex justify-center">
                        <label htmlFor={`my-modal${id}`} className="btn w-20 text-white bg-orange-400">Close</label>
                        <button className="btn bg-[#27C196] w-20 text-white" onClick={addAsset}>Add</button>
                        <button className="btn bg-[#C33E59] w-20 text-white" onClick={deleteAsset}>Delete</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyPorfolioFund