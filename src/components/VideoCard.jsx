import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteVideoApi,addhistoryApi } from '../services/allApis';

function VideoCard({video,del,cat}) {
  const [show, setShow] = useState(false);



  const removeVideo = async(id)=>{
    const result=await deleteVideoApi(id)
    console.log(result)
    if(result.status==200){
      del(result)
  }
}
  const handleClose = () => setShow(false);
  const handleShow = async()=>{
    setShow(true)
    const data={
      videoId:video.id,
      title:video.title,
      image:video.imageUrl,
      videoUrl:video.videoUrl,
      datetime:new Date()
    }
    const result=await addhistoryApi(data)
    console.log(result)
 }
  const dragEventHandler=(e)=>{
    console.log(video.title)
    console.log("dragging...")
    e.dataTransfer.setData("video",JSON.stringify(video))
  }


  return (
    <>
        <Card style={{ width: '18rem' }} onDragStart={(e)=>{dragEventHandler(e)}} draggable>
      <Card.Img onClick={handleShow} variant="top"  src={video.imageUrl}/>
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
{
        !cat &&

        <Button variant=""onClick={()=>{removeVideo(video.id)}}>
          <i class="fa-solid fa-trash text-danger"></i></Button>

}
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="315" src={`${video.videoUrl}&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default VideoCard