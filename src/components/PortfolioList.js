import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import MyPorfolioFund from './MyPorfolioFund'

const fetcher = url => axios.get(url).then(res => res.data)

const PortfolioList = () => {
    const { data, error } = useSWR('http://localhost:4000/portfolios', fetcher, { refreshInterval: 1000 })
    const [totalNav, setTotalNav] = useState(0)

    useEffect(() => {
        let sum = 0
        if (data) {
            data.forEach(el => sum += el.nav)
            setTotalNav(sum)
        }
    }, [data])

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div className='bg-[#fbfcfd] w-screen h-screen mt-6'>
            <h2 className='flex  font-bold justify-center text-3xl text-[#346CCB]'>Total assets : {totalNav}</h2>
            {data.map(fd => <MyPorfolioFund id={fd.id} fName={fd.fName} nav={fd.nav} key={fd.id} />)}
        </div>
    )
}

export default PortfolioList