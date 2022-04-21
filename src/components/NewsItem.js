import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <>
                <div className="card shadow-lg p-3 mb-5 bg-body rounded" >
                    <div className="d-flex position-absolute flex-col justify-content-end" >
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>

                    <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "12rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()
                        }</small></p>
                        <p className="card-text">{desc}...</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read Article</a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem