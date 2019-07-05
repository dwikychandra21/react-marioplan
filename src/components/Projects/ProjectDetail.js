import React from "react";

const projectDetail = props => {
    console.log(props);
    
    return (
        <div className="container project-detail">
            <div className="card z-depth-0">
                <div className="card-content">
                    <h1 className="card-title">Project Title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat aliquid dolor ullam eum quo, enim necessitatibus architecto facere voluptatum placeat tempore, porro, harum consequuntur? Aperiam blanditiis nulla omnis recusandae dolorum?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <p>Posted by Dwiky Chandra</p>
                    <p>September 2, 2019 2AM</p>
                </div>
            </div>
        </div>
    )
}

export default projectDetail;