import React, { Component } from 'react';
import { Placeholder } from 'semantic-ui-react';

import SideNav from '../../Components/Sidenav-Component/sideNav.component';
import PostDisplay from '../../Components/Post-Display/postDisplay.component';

import './home.scene.scss';

export default class HomeScene extends Component {

    constructor(props) {
        super(props);

        this.state = {
            postData: [],
            loading: true
        }
    }

    createPosts = (data) => {
        this.setState({ loading: true });
        if (data) {
            let postData = []
            if (typeof data == 'object' && typeof data.data == 'object' && typeof data.data.children == 'object') {
                if (data.data.children.length) {
                    data.data.children.map((post) => {
                        if (typeof post.data.preview == 'object') {
                            if (typeof post.data.preview.images == 'object') {
                                if (post.data.preview.images.length) {
                                    let filteredPost = post.data.preview.images[0].resolutions.filter((entry) => entry.width === 320);
                                    if (filteredPost[0] && filteredPost[0].url) {
                                        post.data.imageUrl = (filteredPost[0].url.includes('&amp') ? filteredPost[0].url.split('&amp;').join('&') : filteredPost[0].url);
                                        postData.push(post.data);
                                    }
                                    // console.log('post', post.data.preview.images[0]);
                                }
                            }
                        }
                    })
                }
            }
            this.setState({ postData, loading: false });
        }
    }

    render() {
        const { postData, loading } = this.state;
        return (
            <div className='home-container'>
                <div className='row'>
                    <div className='col-sm-2 navigation-panel'>
                        <div className='logo-group'>
                            <img src={require('./../../Assets/Images/logo.png')} width='30px' alt='logo' />
                            <span className='main-head'>Subreddits</span>
                        </div>
                        <div className='side-nav'>
                            <SideNav callback={this.createPosts} />
                        </div>
                    </div>
                    <div className='col-sm-10 content-panel'>
                        <div className='header-bar'>
                            <div className='search-bar'>
                                <input type="text" name="name" autoComplete='off' />
                                <img src={require('./../../Assets/Images/loupe.png')} width='20px' alt='search' className='search-logo' />
                            </div>
                            <div className='user-info'>
                                <img src={require('./../../Assets/Images/user.jpg')} alt='user' className='user-icon' />
                                <div className='user-data'>
                                    Akash Kumar Gaur
                                    <span className='user-role'>
                                        <i className="fas fa-award"></i> Premium user
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='posts-container'>
                            {
                                !loading ?
                                    <PostDisplay posts={postData} />
                                    :
                                    <div class="lds-ripple"><div></div><div></div></div>
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}