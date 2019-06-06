import React, { Component } from 'react';
import { getAllReddits } from '../../Utils/reddits.utils';

import './sideNav.component.scss';

export default class SideNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedReddit: {}
        }
    }

    selectReddit = (reddit) => {
        this.props.callback()
        const { selectedReddit } = this.state;
        selectedReddit.isSelected = false;
        reddit.isSelected = true;
        this.setState({ reddit, selectedReddit: reddit });
        this.getRedditData(reddit);
    }

    getRedditData = async (reddit) => {
        await fetch(reddit.endPoint)
            .then(response => response.json())
            .then(data => this.props.callback(data));
    }

    componentDidMount() {
        let reddits = getAllReddits();
        const selectedReddit = reddits[0];
        selectedReddit.isSelected = true;
        this.setState({ selectedReddit, reddits });
        this.getRedditData(selectedReddit);
    }

    render() {
        const { reddits } = this.state;
        return (
            <div className='reddits-categories'>
                <div className='heading'>
                    Top Reddits
                </div>
                {
                    reddits && reddits.map((reddit, key) => {
                        return (
                            <div className='subreddit' key={key} onClick={() => this.selectReddit(reddit)}>
                                <div className='subreddit-info'>
                                    <div className='reddit-logo'>
                                        <i className={reddit.icon} />
                                    </div>
                                    <div className='reddit-name'>
                                        {reddit.name}
                                    </div>
                                </div>
                                <div className='active-status'>
                                    {reddit.isSelected ? <i className="far fa-check-circle"></i> : null}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}