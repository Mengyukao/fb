import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        const { post: { thumbnail, name, time, comment } } = this.props;
        return (
            <div className="Card">
                <div className="Card-container">
                    <div className="Card-header">
                        <img src={thumbnail} width="40" height="40" />
                        <div className="Card-name">
                            <div className="Card-name-name">
                                {name}
                            </div>
                            <div className="Card-name-time">
                                {time}{' '}
                            </div>
                        </div>
                    </div>
                    <div className="Card-content">
                        {comment}
                    </div>
                    <div className="Card-share">
                        <a className="nice" href="#">
                            讚
                        </a>
                        <a className="comment" href="#">
                            留言
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
