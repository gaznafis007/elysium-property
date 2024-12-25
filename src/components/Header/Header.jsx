import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <section className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-row  md:space-x-4 items-center'>
                <Image className={'rounded-xl hidden md:block'} src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='profile-image' width={50} height={60}/>
                <div>
                    <h2 className='text-4xl font-semibold text-purple-800 capitalize'>welcome!</h2>
                    <p className="text-thin text-slate-800 mt-1">Let's have an overview on the properties and all the actions</p>
                </div>
            </div>
        </section>
    );
};

export default Header;