import React from 'react';
import { FaBuildingCircleCheck } from "react-icons/fa6";
import { LuBaggageClaim } from "react-icons/lu";
import { TbReportMoney } from "react-icons/tb";
import { MdReviews } from "react-icons/md";

const Stats = () => {
    const stats = [
        {
            name: 'check ins',
            count: 12,
            icon: <FaBuildingCircleCheck className='text-purple-800' size={44} />
        },
        {
             name: 'check outs',
            count: 24,
            icon: <LuBaggageClaim className='text-purple-800' size={44} />
        },
        {
            name: 'earnings',
            count: '430 $',
            icon: <TbReportMoney className='text-purple-800' size={44} />
        },
        {
            name: 'reviews',
            count: 12,
            icon: <MdReviews className='text-purple-800' size={44} />
        },
    ]
    return (
        <section className='grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mt-6'>
            {
                stats?.map(stat =>(
                    <div key={stat?.name} className='p-3 md:p-5 rounded-md border border-purple-800 flex flex-col-reverse items-center justify-between md:flex-row md:space-x-4'>
                        <div>
                        <h2 className="text-2xl capitalize font-semibold text-purple-800">{stat?.name}</h2>
                        <p className=" text-center md:text-left mt-4 text-xl text-slate-800 font-thin">{stat?.count}</p>
                        </div>
                        {stat?.icon}
                    </div>
                ))
            }
        </section>
    );
};

export default Stats;