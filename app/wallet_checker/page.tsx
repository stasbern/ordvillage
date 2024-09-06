"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { WindowHeader } from '../../components/WindowHeader';
import useSWR from 'swr';

export default function Infoboard() {
    // const [Message, setMSG] = useState(<p className="sm:text-xl text-lg text-white">Paste Your Address</p>);
    // const fetcher = (url: string) => fetch(url).then((res) => res.json());
    // const { data: fcfsData, error: fcfsError } = useSWR('/lists/FCFS.json', fetcher);
    // const { data: gtdData, error: gtdError } = useSWR('/lists/GTD.json', fetcher);

    // const isAddressInList = (list: string[] | undefined, address: string) => {
    //     let lowerList = list?.map(acc => acc.toLowerCase()) ?? [];
    //     let lowerAddress = address.toLowerCase();
    //     return lowerList.includes(lowerAddress);
    // };

    // const HandleCheck = (addr: string) => {
    //     if (typeof addr !== 'string' || addr.length === 0) {
    //         setMSG(<p className="sm:text-xl text-lg text-white">Paste Your Address</p>);
    //         return;
    //     }

    //     if (addr.length < 42) {
    //         setMSG(<p className="sm:text-xl text-lg text-orange-500">Not a valid address</p>);
    //         return;
    //     }

    //     let useradd = addr.toLowerCase();

    //     if (isAddressInList(gtdData, useradd)) {
    //         setMSG(<p className="sm:text-xl text-lg">GTD</p>);
    //     } else if (isAddressInList(fcfsData, useradd)) {
    //         setMSG(<p className="sm:text-xl text-lg">FCFS</p>);
    //     } else {
    //         setMSG(<p className="sm:text-xl text-lg">NOT IN WL</p>);
    //     }
    // };


    return (
        <div className="flex justify-center content-center pt-40">
            {/* <WindowHeader title='Wallet Checker'>
                {(props) => (
                    <div
                        className="flex flex-col backdrop-blur-sm border-2 p-2 text-white h-full"
                        style={{
                            backdropFilter: "blur(4px)",
                            borderWidth: "2px",
                            padding: "1rem",
                            borderColor: props.bgColor,
                            wordWrap: 'break-word'
                        }}
                    >
                        <div className="flex-grow flex flex-col space-y-5 justify-center items-center">
                            <input
                                className="w-full text-black p-3 focus:outline-2 focus:outline-slate-400 caret-slate-500"
                                type="text"
                                placeholder="Paste Your Address to check"
                                onChange={(e) => {
                                    e.preventDefault();
                                    HandleCheck(e.target.value);
                                }}
                            />
                            {Message}
                        </div>
                    </div>
                )}
            </WindowHeader> */}
            <h1 className='text-white justify-center content-center'>COMING SOON...</h1>
        </div>
    );
}