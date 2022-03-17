import React from "react";

const Caja = ({id, albumId, url, title, thumbnailUrl})=>{
    return(
        <div className="item">
            <h2>ID: {id}</h2>
            {/* <h2>{albumId}</h2> */}
            {/* <h2>{url}</h2> */}
            <h2>Title: {title}</h2>
            <img src={thumbnailUrl} />
        </div>
    )
}

export default Caja