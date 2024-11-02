import React, { useState } from 'react';
import { blogs } from '../Config/Api';

const Blogs = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    // Function to handle when a blog card is clicked
    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    // Function to handle closing the detailed view
    const closeBlog = () => {
        setSelectedBlog(null);
    };

    return (
        <>
            {/* Blog Cards */}
            <div className="blogs-container">
                {blogs.map((curElm, index) => (
                    <div className="blog-card" key={index} onClick={() => handleBlogClick(curElm)}>
                        <img src={curElm.image} alt={curElm.title} className="blog-card-img" />
                        <h3 className="blog-card-title">{curElm.title}</h3>
                        <p className="blog-card-date">{curElm.date}</p>
                        <p className="blog-card-excerpt">{curElm.excerpt}</p>
                    </div>
                ))}
            </div>

            {/* Blog Details Modal */}
            {selectedBlog && (
                <div className="blog-details-modal">
                    <div className="blog-details-content">
                        <span className="close-button" onClick={closeBlog}>&times;</span>
                        <img src={selectedBlog.image} alt={selectedBlog.title} className="blog-details-img" />
                        <h2 className="blog-details-title">{selectedBlog.title}</h2>
                        <p className="blog-details-date">{selectedBlog.date}</p>
                        <p className="blog-details-location">Location: {selectedBlog.location}</p>
                        <p className="blog-details-content-text">{selectedBlog.details}</p>
                        <ul className="blog-details-schedule">
                            {selectedBlog.schedule.map((item, idx) => (
                                <li key={idx}><strong>{item.time}</strong> - {item.activity}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default Blogs;
