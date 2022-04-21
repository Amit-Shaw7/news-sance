import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        ccategory: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        ccategory: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            cPage: 1,
            totalRes: ""
        }
        document.title = `News-ance - ${this.props.category}`
    }
    async componentDidMount() {
        this.changeNews();
    }
    handleNext = async () => {
        // console.log("Next Clicked")

        this.setState({
            loading: true,
            cPage: this.state.cPage + 1
        }, this.changeNews)
    }
    handlePrev = async () => {
        // console.log("Prev Clicked")
        this.setState({
            cPage: this.state.cPage - 1
        }, this.changeNews)
    }
    async changeNews() {
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.cPage}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parseData = await data.json();
        let totalResults = parseData.totalResults;

        // console.log("Parsed Dtat is : " , parseData);
        this.setState({
            articles: parseData.articles,
            loading: false,
            totalRes: totalResults,
        });
    }
    render() {
        let toShow = Math.ceil(Number(this.state.totalRes) / this.props.pageSize);
        // console.log(toShow)

        return (
            <>
                <div className='container my-5 py-3'>
                    <h2 className='text-center my-3'>Top Headlines from {this.props.category}</h2>
                    {this.state.loading && <Spinner></Spinner>}
                    <div className="row">
                        {
                            (!this.state.loading) && this.state.articles.map((elem) => {
                                return <div className="col-md-4 my-2" key={elem.url}>
                                    <NewsItem title={elem.title ? elem.title.slice(0, 40) : "Click On Read More To read tgis news"}
                                        desc={elem.description ? elem.description.slice(0, 80) : "Click On Read More To get to know about this viral news"}
                                        imageUrl={elem.urlToImage ? elem.urlToImage : "https://media.gettyimages.com/vectors/abstract-globe-background-vector-id1311148884?"}
                                        newsUrl={elem.url}
                                        pageSize={5}
                                        author={elem.author ? elem.author : "Unknown"}
                                        date={elem.publishedAt ? elem.publishedAt : ""}
                                        source={elem.source.name ? elem.source.name : "Unknown"}>
                                    </NewsItem>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className="container d-flex justify-content-between my-4">
                    <button disabled={this.state.cPage > 1 ? false : true} type="button" className="btn btn-dark" onClick={this.handlePrev}>&#8592; Prev</button>
                    <button disabled={this.state.cPage > toShow - 1 ? true : false} type="button" className="btn btn-dark" onClick={this.handleNext}>Next &#8594;</button>
                </div>
            </>
        )
    }
}

export default News

// async componentDidMount() {
//     // this.setState({loading:true})
//     // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&&apiKey=2c941a91df1948ada2a63c3a9178fee4&page=${this.state.cPage}&pageSize=${this.props.pageSize}`;
//     // let data = await fetch(url);
//     // let parseData = await data.json();
//     // let totalResults = parseData.totalResults;
//     // console.log("Parsed Dtat is : " , parseData);
//     // this.setState({
//     //     articles: parseData.articles,
//     //     totalRes : totalResults,
//     //     loading : false
//     // });
//     this.changeNews();
// }