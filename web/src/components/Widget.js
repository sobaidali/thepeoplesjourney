import React from 'react'

const Widget = ({ heading }) => {
    return (
        <div className="widget-head">
            <h4 className="widget-title">
                <span className="">{heading}</span>
            </h4>
        </div>
    )
}

export default Widget
