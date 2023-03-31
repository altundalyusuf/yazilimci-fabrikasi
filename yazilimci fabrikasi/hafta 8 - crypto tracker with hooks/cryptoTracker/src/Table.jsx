import React, { useState, useEffect, useRef } from 'react'
import axios from "axios"

function Table() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const ref = useRef('');

    const fetchData = async () => {
        await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error.message))
    }


    useEffect(() => {
        fetchData()
    }, [])


    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => {
        setSearch("");
        ref.current.value = "";
    }

    const filteredCoins = data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className="overflow-x-auto w-full">
                <div className='flex justify-between'>
                    {/* Header */}
                    <h1 className="text-4xl text-primary font-bold">Kripto Borsa</h1>
                    {/* Search Input */}
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered input-secondary" onChange={handleChange} ref={ref} />
                            <button className="btn btn-square" onClick={handleSearch}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th className='grid grid-cols-2'>
                                <div className='self-center'>İsim</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-yellow-400 hover:stroke-lime-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>
                                </div>
                            </th>
                            <th>Sembol</th>
                            <th>Fiyat</th>
                            <th>Değişim</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredCoins.map(coin => (
                                <tr className='text-center'>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={coin.image} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{coin.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-primary badge-lg">{coin.symbol.toUpperCase()}</span>
                                    </td>
                                    <td>{coin.current_price} $</td>
                                    <th>
                                        {
                                            coin.price_change_percentage_24h < 0 ?
                                                <span className='text-red-500'>{coin.price_change_percentage_24h}</span> :
                                                <span className='text-green-400'>{coin.price_change_percentage_24h}</span>
                                        }
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr className='text-center'>
                            <th className='grid grid-cols-2'>
                                <div className='self-center'>İsim</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-yellow-400 hover:stroke-lime-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                    </svg>
                                </div>
                            </th>
                            <th>Sembol</th>
                            <th>Fiyat</th>
                            <th>Değişim</th>
                        </tr>
                    </tfoot>

                </table>
            </div >
        </>
    )
}

export default Table