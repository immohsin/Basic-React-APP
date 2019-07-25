import React from 'react';

const MyInfo = ({ deleteInfo, details }) => {
       
    return (
        <div className="info-details-list">
             { 
                details.map(infoDetail => {
                return (
                <div className="info-detail" key={ infoDetail.id }>
                        <div>Name: { infoDetail.name }</div>
                        <div>Age: { infoDetail.age}</div>
                        <button onClick={() => {deleteInfo(infoDetail.id)}}>Delete</button>
                </div>)
                })
              }
        </div>
    )
}

export default MyInfo
