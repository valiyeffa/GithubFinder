import React from 'react'

const Card = ({ userdata }) => {
    return (
        <main className='col-12 col-lg-12 col-md-12 col-sm-12'>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={userdata.avatar_url} className="img-fluid" alt={userdata.login} />
                        <a href={userdata.html_url} target='_blank' className='view-profile'>View Profile</a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body-head">
                            <span className='bg-blue'>Public Repos: 15</span>
                            <span className='bg-grey'>Public Gists: 20</span>
                            <span className='bg-green'>Followers: 124</span>
                            <span className='bg-wblue'>Following: 33</span>
                        </div>
                        <div className="card-body">
                            <p className="card-title">Username: {userdata.login}</p>
                            <p className="card-text">Website: <a href={userdata.organizations_url}>{userdata.organizations_url}</a></p>
                            <p className="card-text">Node ID: {userdata.node_id}</p>
                            <p className="card-text">User ID: {userdata.id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Card