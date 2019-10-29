import React, {Component} from 'react'
import Nav from './Nav';

class SearchPage extends React.Component {
    constructor(){
        super()
        this.state = {
            value: '',
            img: '',
            alt: '',
            title: '',
            num: ''
        }

    }

     handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    fetchComic(event) {
        event.preventDefault()

        fetch('https://xkcd.now.sh/?comic=' + this.state.value)
        .then(resp => resp.json())
        .then(jsonData => {
            this.setState({
                img: jsonData.img,
                alt: jsonData.alt,
                title: jsonData.title,
                num: `#${jsonData.num}`
            })
        })
        .catch(err => console.log(err));

    }


    render(){

        return (
            <div className="searchPage">
                <div className="searchPageHeader">
                    <Nav />
                    <input className="searchInput"
                            type="number"
                            name="searchInput"
                            value= {this.state.value}
                            onChange={this.handleChange.bind(this)}
                            min={"1"}
                            max={"2221"}
                            placeholder={"comic#..."} />

                    <button className="searchSubmit"
                            type="submit"
                            onClick={this.fetchComic.bind(this)}>Submit</button>
                </div>

                <div className="pageHeader">
                    <p className="latestTitle">{this.state.title}</p>
                    <p>{this.state.num}</p>
                </div>

                <img className="searchImage"
                     src={this.state.img}
                     alt={this.state.title}
                     title={this.state.alt}/>
            </div>

        )
    }
}

export default SearchPage;