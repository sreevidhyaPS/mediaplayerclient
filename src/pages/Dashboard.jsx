import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import AddVideo from '../components/AddVideo'   
import VideoCard from '../components/VideoCard'
import CategoryList from '../components/Categorylist'
import { Link } from 'react-router-dom'
import { getVideoListApi } from '../services/allApis'


function Dashboard() {

  const [addCategoryList,setAddCategoryList]=useState("")

  const [videos,setVideos]=useState([])
  const [ addResponse, setAddResponse]=useState("")
  const [delResponse,setDelResponse]=useState("")
  useEffect(()=>{
    getData()
  },[addResponse,delResponse,addCategoryList])


  const getData=async()=>{
    const result=await getVideoListApi()
    if(result.status==200){
      console.log(result.data)
      setVideos(result.data)
    }
  }
  return (
    <>
    <div className="container-fluid my-5">
      <div className="d-flex justify-content-between">
      <h2>All Videos</h2>
      <Link to={'/his'}>Watch History</Link>
      <Link className='btn btn-danger' to={'/log'}>Logout</Link>
      </div>
      
      <Row>

        <Col lg={1}>
        
        <AddVideo addres={setAddResponse}/>
        
        </Col>
        <Col lg={8}>
  
{
videos.length > 0 ?
<div className='d-flex justify-content-even flex-wrap border border-3 p-2'>
  {
videos.map(item=>(
  <VideoCard video={item} del={setDelResponse}/>
))
  }
</div>
:
<h3>No Videos Added Yet!!</h3>
}


        </Col>
        <Col lg={3}>
        <CategoryList addcat={setAddCategoryList}/>
        
        </Col>

      </Row>
    </div>
    </>
  )
}

export default Dashboard