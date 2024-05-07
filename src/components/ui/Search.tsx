import React from 'react'

export default function Search() {
    return (
        <nav className="flex items-center justify-between sticky top-0 z-50 shadow-md bg-white p-3 md:px-10">
        <div className="flex-1 h-20 my-auto">
            <img className="h-full w-full object-contain object-left" src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png" />
        </div>
    
        <div className="flex-1 flex md:border-2 md:rounded-full md:shadow-sm py-2">
            <input className="flex-grow text-neutral-950 placeholder:text-gray-400 outline-none pl-5 bg-transparent" type="text" placeholder="Search for location" />
            <svg className="hidden md:block md:mx-2 h-10 bg-[#EE0F37] text-white rounded-full p-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
        </div>
    
        <div className="flex-1 flex items-center justify-end space-x-4 text-neutral-950">
            <a className="hidden md:inline font-medium tracking-tighter" href="#">Invite guests</a>
    
    
            <div className="flex space-x-2 border-2 rounded-full p-2">
                <svg className="h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
    </nav>
    )
}
