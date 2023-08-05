import { useState } from "react";
const SaveForLater=()=>{
    const saveHandler=(e)=>{
        const postId=e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.id;
        const savedPostId=JSON.parse(localStorage.getItem('savedPostId'));
        savedPostId.push(postId);
        localStorage.setItem('savedPostId',JSON.stringify(savedPostId));
        //save post here
    }
    const [save,setSave]=useState(false);
    return (
        <div className='flex-item pointer' onClick={saveHandler} >
        {!save&&<div><svg onClick={()=>setSave(true)} aria-label="Save"  color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></div>}
        
        {save&& <svg onClick={()=>setSave(false)} aria-label="Remove"  color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Remove</title><path d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"></path></svg>}
        </div>
    );
}
export default SaveForLater;