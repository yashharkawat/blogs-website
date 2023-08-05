import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Root=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        if('users' in localStorage){}
        else localStorage.setItem('users',JSON.stringify([]));
        if('savedPostId' in localStorage){}
        else localStorage.setItem('savedPostId',JSON.stringify([]));
        
        try{
            if('demo_user' in localStorage){

                console.log(true);
            }
            else{
                navigate('/signup');
            }
        }
        catch (err){
            navigate('/signup');
        }
    },[])
    return (
        <Outlet />
    );
}
export default Root;