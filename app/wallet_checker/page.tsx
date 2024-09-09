"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import useSWR from 'swr';
import '../globals.css'


export default function Infoboard() {
    const [Message, setMSG] = useState(<p className="sm:text-xl text-lg text-white">Paste Your Address</p>);
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data: wlData, error: wlError } = useSWR('/lists/WL.json', fetcher);

    const isAddressInList = (list: string[] | undefined, address: string) => {
        let lowerList = list?.map(acc => acc.toLowerCase()) ?? [];
        let lowerAddress = address.toLowerCase();
        return lowerList.includes(lowerAddress);
    };

    const HandleCheck = (addr: string) => {
        if (typeof addr !== 'string' || addr.length === 0) {
            setMSG(<p className="sm:text-xl text-lg text-white">Paste Your Address</p>);
            return;
        }

        if (addr.length < 42) {
            setMSG(<p className="sm:text-xl text-lg text-orange-500">Not a valid address</p>);
            return;
        }

        let useradd = addr.toLowerCase();

        if (isAddressInList(wlData, useradd)) {
            setMSG(<p className="sm:text-xl text-lg">WL</p>);
        } else {
            setMSG(<p className="sm:text-xl text-lg">NOT IN WL</p>);
        }
    };


    return (
        <div className="flex justify-center content-center items-center pt-52" style={{fontFamily: "manga"}}>
            <div
                className="flex flex-col backdrop-blur-sm border-2 p-2  text-white h-full"
                style={{
                    backdropFilter: "blur(4px)",
                    borderWidth: "2px",
                    padding: "1rem",
                    wordWrap: 'break-word',
                    width: "80vw",
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
        </div>
    );
}