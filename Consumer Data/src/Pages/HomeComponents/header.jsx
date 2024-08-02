import React from "react"

function Header(){
    return (
        <div className="container-fluid text-white pb-4 header">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                <h1 className="mb-3 mb-md-0 text-center text-md-left">User Reviews of <span>Compass East Corporation</span> Company</h1>
                <h2 className="text-center text-md-right">Average <span>4.8</span></h2>
            </div>
        </div>
    )
}
export default Header