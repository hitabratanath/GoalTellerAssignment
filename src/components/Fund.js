import React from 'react'
import axios from 'axios'
const Fund = ({ fName, fCode, nav, alert }) => {
    function addToPortfolio() {
        axios.post(`http://localhost:4000/portfolios`, {
            id: fCode,
            fName,
            nav: 1
        })
        alert()
    }
    return (
        <div className='bg-[white]  text-gray-500 font-bold mb-2 px-4 py-2 flex justify-between items-center rounded-md m-3 w-3/5'>
            <div className='p-2'> <div className='text-gray-800 inline-block'>{fCode}</div> {fName}</div>
            {/* <button className="btn" onClick={addToPortfolio}>Button</button> */}

            <label htmlFor={`my-modal${fCode}`} className="btn bg-[#346ccc] text-white">Add to portfolio</label>

            <input type="checkbox" id={`my-modal${fCode}`} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-[#346CCB] text-lg text-center">Are you sure you want to add this fund?</h3>
                    <div className='font-bold text-center text-sm mt-4'>{fName}</div>
                    <div className="modal-action flex justify-center">
                        <label htmlFor={`my-modal${fCode}`} className="btn bg-green-700 text-white" onClick={addToPortfolio}>Yes!</label>
                        <label htmlFor={`my-modal${fCode}`} className="btn bg-red-500 text-white">No!</label>
                    </div>
                </div>
            </div>
            {/* <button type="button" onClick={addToPortfolio} className="min-w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Add to portfolio</button> */}
        </div>
    )
}

export default Fund