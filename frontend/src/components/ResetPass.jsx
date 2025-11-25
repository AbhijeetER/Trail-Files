import { BackgroundLines } from "../ui/background-lines";
import Navbar from "./Navbar";
import { useState,useEffect,useRef } from "react";


export default function ResetPassword({children}){
const [oldPassword, setOldPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [reEnterPassword, setReEnterPassword] = useState("");
    const passwordRef = useRef(null);



    return(
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">

        <div className="flex flex-col items-center h-50 w-100 ">
                <h1 className="text-white font-bold font-sans tracking-wider text-4xl m-5">Reset Password</h1>
                <input type="text" placeholder="Previous password" className="z-10 text-white border-2 border-solid rounded-2xl py-2.5 w-70 border-white my-2.5 placeholder-amber-50" value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)} />
                <input type="text" placeholder="New Password" className="z-10 text-white border-2 border-solid rounded-2xl py-2.5 w-70 border-white my-2.5 placeholder-amber-50" value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)} />
                <input type="text" placeholder="Re-enter Password" className="z-10 text-white border-2 border-solid rounded-2xl py-2.5 w-70 border-white my-2.5 placeholder-amber-50" value={reEnterPassword} 
                onChange={(e) => setReEnterPassword(e.target.value)}/>
            </div>

        </BackgroundLines>
    )
}