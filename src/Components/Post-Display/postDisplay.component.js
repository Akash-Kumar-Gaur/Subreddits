import React, { Component } from 'react';
import './postDisplay.component.scss';

export default class PostDisplay extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: this.props.posts
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ posts: nextProps.posts });
    }

    render() {
        const { posts } = this.state;
        return (
            <div className='post-container row'>
                {
                    posts && posts.map((post, key) => {
                        return (
                            (key < 24) &&
                            <div className='post col-sm-12 col-md-3 col-lg-2' key={key}>
                                <div className='top'>
                                    <div className='post-image'>
                                        <img src={`${(post.imageUrl)}`} alt='preview' className='thumbnail' />
                                    </div>
                                    <div className='title'>
                                        {post.title.length > 180 ? `${post.title.substring(0, 200)}...` : post.title}
                                    </div>
                                </div>
                                <div className='footer'>
                                    <div className='left'>
                                        <div className='ups'>
                                            <span data-balloon="Ups" data-balloon-pos="up"><i className="far fa-laugh-beam icon1"></i></span>{post.ups}
                                        </div>
                                        <div className='downs'>
                                            <span data-balloon="Downs" data-balloon-pos="down"><i className="far fa-frown-open icon1"></i></span>{post.downs}
                                        </div>
                                    </div>
                                    <div className='right'>
                                        <div className='fav' onClick={() => { post.favorite = !post.favorite; this.setState(post) }}>
                                            <i className={`${post.favorite ? 'fas fa-heart favorite' : 'far fa-heart normal'}`}></i>
                                        </div>
                                        <div className='share'>
                                            <a href={post.url} target='_blank' rel="noopener noreferrer"><span data-balloon="Redirect" data-balloon-pos="up"><i className="far fa-share-square icon1"></i></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}