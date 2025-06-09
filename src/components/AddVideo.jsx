import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { addVideoApi } from '../services/allApis';

function AddVideo({addres}) {

    const [show, setShow] = useState(false);

    const[video,setVideo]=useState({
        title:"",videoUrl:"",imageUrl:""
    })

    const handleAdd=async()=>{
        const {title,videoUrl,imageUrl}=video
        if(!title || !videoUrl || !imageUrl){
            toast.warning("Enter Valid Inputs")
        }
        else{
            // console.log(video)
            const charset=video.videoUrl.split("v=")
            // console.log(charset)
            setVideo({...video,videoUrl:`https://www.youtube.com/embed/${charset[1]}?si=4qejQA4-65TntNML`})
            console.log(video)
            const result=await addVideoApi({title,imageUrl,videoUrl:`https://www.youtube.com/embed/${charset[1]}?si=4qejQA4-65TntNML`})
            console.log(result)
            if(result.status==201){
                toast.success("Video Uploaded Successfully!!")
                setVideo({title:"",videoUrl:"",imageUrl:""})
                handleClose()
                addres(result)
            }
            else{
                toast.error("Uploading Failed")
                console.log(result)
            }
        }
    } 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <button className="btn"><i className="fa-solid fa-square-plus fa-xl text-success" onClick={handleShow}></i></button>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}> 
        <Modal.Header closeButton>
            <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className='my-2'>
                <div className='mb-3'>
                    <input type="text" placeholder='Enter Video Title' onChange={(e)=>{setVideo({...video,title:e.target.value})}} className='form-control' />
                </div>
                <div className='mb-3'>
                    <input type="text" placeholder='Enter Video URL' onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} className='form-control' />
                </div>
                <div className='mb-3'>
                    <input type="text" placeholder='Enter Image URL' onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} className='form-control' />
                </div>

            </div>
       </Modal.Body>
       <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
         <Button variant="success" onClick={handleAdd} >Upload</Button>
        </Modal.Footer>
    </Modal>
</>
  )
}

export default AddVideo