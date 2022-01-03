import React from 'react'
import { DeviceSize } from './NewNavBar/DeviceSize'
import { useMediaQuery } from 'react-responsive';

const Videos = () => {
    const isMobile = useMediaQuery({maxWidth:DeviceSize.mobile})

    return (
        <>
        <div>
            <h1 style={{textAlign:"center", margin:"30px auto auto auto", fontFamily:"Montserrat"}}> Промотивни видеа од Наша Тезга </h1>
        </div>
        {!isMobile?
        <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)", justifyItems:"center", margin:"50px auto auto 30px"}}>
            <iframe  width="660" height="400" src="https://www.youtube.com/embed/mTVryRDRk9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe  width="660" height="400" src="https://www.youtube.com/embed/m9MIeaD-pD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe style={{marginTop:"25px"}} width="660"  height="400" src="https://www.youtube.com/embed/qJJplTaPBUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe style={{marginTop:"25px"}} width="660"  height="400" src="https://www.youtube.com/embed/kmt5bN0rOSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe style={{marginTop:"25px"}} width="660"  height="400" src="https://www.youtube.com/embed/I8w3XCzwauM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
        </div> :  
            <div style={{display:"grid", gridTemplateColumns:"repeat(1,1fr)", justifyItems:"center", marginLeft:"30px"}}>
            <iframe style={{marginTop:"25px"}} width="auto" height="400" src="https://www.youtube.com/embed/mTVryRDRk9o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe style={{marginTop:"25px"}} width="auto" height="400" src="https://www.youtube.com/embed/m9MIeaD-pD4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe style={{marginTop:"25px"}} width="auto" height="400" src="https://www.youtube.com/embed/qJJplTaPBUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe style={{marginTop:"25px"}} width="auto" height="400" src="https://www.youtube.com/embed/kmt5bN0rOSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
            <iframe style={{marginTop:"25px"}} width="auto" height="400" src="https://www.youtube.com/embed/I8w3XCzwauM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen="allowfullscreen"></iframe>
    </div>
        }
        </>
    )
}

export default Videos
