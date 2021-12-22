import React from 'react'

export default function SingleRoadMap({data}) {
    return (
        <div key={data.progress}  className="d-flex">
        <div className="d-flex flex-column align-items-center">
          <div>
            <div className="bg_border_img">{data.progress}%</div>
          </div>
         {data.progress !== 100 && <div className="process_bar_line my-2"></div>}
        </div>
        <div className="bg_process_img">
          <div style={{backgroundPosition: `center ${data.progress }%`}}></div>
          {data.text}
        </div>
      </div>
    )
}
