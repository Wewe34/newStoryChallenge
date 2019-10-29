import React, {Component} from 'react'
import Nav from './Nav';

class HomePage extends React.Component {
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

    componentDidMount (){
        fetch('https://xkcd.now.sh/?comic=latest')
        .then(resp => resp.json())
        .then(jsonData => {
            this.setState({
                img: jsonData.img,
                alt: jsonData.alt,
                title: jsonData.title,
                num: jsonData.num
            })
        })
        .catch(err => console.log(err));
    }


    render(){

        return (
            <div>
                <Nav />
                <div className="pageHeader">
                    <p className="latestTitle">{this.state.title}</p>
                    <p>#{this.state.num}</p>
                </div>
                <img className="latestImage"
                     src={this.state.img}
                     alt={this.state.title}
                     title={this.state.alt}/>
            </div>

        )
    }
}

export default HomePage;