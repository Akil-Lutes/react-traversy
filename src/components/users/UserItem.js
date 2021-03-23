import React, { Component } from 'react';

class UserItem extends Component {
    constructor() {
        super();
        // this is an object
        this.state = {
            // I am working with github api requests
            id: 'id',
            login: 'octocat',
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            // link to github profile
            html_url: 'https://github.com/mojombo'
            // I will fetch this data later on through http requests
        };
    }

// coding how to use state in the render portion
    render() {
        return (
            // img src is dynamic and to pull it from state within a class, I use this.state. {}
            // I can use inline style by using {{backgroundColor: 'red'}}
            <div className="card text-center">
                <img 
                src={this.state.avatar_url} 
                alt="" 
                className="round-img"  
                style={{ width: '60px' }} 
                />  
            </div>
        );
    }
}

export default UserItem;
