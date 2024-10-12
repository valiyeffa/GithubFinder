import React, { useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Search = ({ comingData }) => {
    const [keyword, setKeyword] = useState([]);
    const notify = () => toast.warn('Please fill input!');

    const formSubmit = (e) => {
        e.preventDefault();
        if (!keyword) {
            notify();
        } else {
            comingData(keyword);
            setKeyword('');
        }
    }

    return (
        <main>
            <form onSubmit={formSubmit}>
                <div className="form-body mb-3">
                    <h1>Search GitHub Users</h1>
                    <label htmlFor="exampleInputEmail1" className="form-label">Enter a username to fetch a the user's profile and repos.</label>
                    <input type="text" className="form-control" placeholder='Search' value={keyword} onChange={e => setKeyword(e.target.value)} />
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition= {Bounce}
                />
            </form>
        </main>
    )
}

export default Search