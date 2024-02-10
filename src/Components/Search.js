import React from "react";

class Search extends React.Component {
    render() {

        return (
            <div className="bg-dark">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <div className="row">
                                <div className="col-9">
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="username"
                                        placeholder="Enter username"
                                    />
                                </div>
                                <div className="col-3">
                                    <button
                                        className="btn btn-large btn-success">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search