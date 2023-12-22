import React from 'react'
import logo from "../resourses/logo.png"
import { v4 as uuidV4 } from 'uuid'
import { useState } from 'react'
import { Toast, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const EditorForm = () => {
    const navigate = useNavigate();
    const [username,setUsername] = useState('');
    const [roomId,setRoomId] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success("Created a new Room");
    }
    const joinRoom =() =>{
        if( !roomId || !username){
            toast.error("RoomId and UserName is required");
            return;
        }
        //Yha pr redirect kr rhe hai (username ke sath)
        navigate(`/editor/${roomId}`,{
            state:{
                username,
            },
        })
    }
    const handleEnterKey =(e)=>{
        if(e.code === 'Enter'){
            joinRoom();
        }
    }


  return (
    <div className="homePagewrapper">
        <div className="formWrapper">
            <img src={logo} alt="sync-hub-logo" />
            <h4 className="mainLabel">Paste Invitational Room ID</h4>
            <div className="inputGroup">
                <input type="text" 
                className="inputBox"
                placeholder='ROOM ID' 
                onChange={(e) => setRoomId(e.target.value) }
                value={roomId} 
                onKeyUp={handleEnterKey}/>

                <input type="text" 
                className="inputBox"
                placeholder='Name' 
                onChange={(e) => setUsername(e.target.value) }
                value={username} 
                onKeyUp={handleEnterKey}/>

                <button className="btn joinbtn" onClick={joinRoom}>Join</button>
                <span className='createInfo'>
                    <br />if you don't have an invite then create &nbsp;
                    <a onClick={createNewRoom} href="#" className='createNewBtn'>new room</a>
                </span>
            </div>
        </div>
        <footer className='footer'>
            <h4>made with 🧡 by <a href="https://github.com/Akshat-Awasthi" target='_blank'>Akshat Awasthi</a></h4>
        </footer>
    </div>
  )
}

export default EditorForm