import React  from 'react';
import { Link } from 'react-router-dom';

let BlogDetails = ({ blogdata }) => {
    console.log(blogdata);
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-body">{blogdata.title}
                    <Link key={blogdata.id} className="btn btn-info float-right" to={`/api/blogs/${blogdata.id}`}>More Details</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;

