import React, { Component } from 'react';
import Card from './Card';
import logo from './logo.svg';
import './App.css';

const leftList = ['活動', '社團', '粉絲專頁'];
const posts = [
    {
        thumbnail:
            'https://scontent-tpe1-1.xx.fbcdn.net/v/t1.0-1/p80x80/14963237_10154281625853051_3899763433811359811_n.jpg?oh=a09772a14e6e63253676b544d9dd8254&oe=59CB8977',
        name: '吳明憲',
        time: '一小時前',
        comment: '今天好熱喔....'
    },
    {
        name: '莊傑智',
        time: '三小時前',
        comment: '我好帥～～～～～～：Ｄ'
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <nav className="App-header">
                    <div className="App-header-container">
                        <div className="App-header-search">
                            <h1 className="bluebar-logo">
                                <span className="blue_bar_fb_logo">
                                    Facebook
                                </span>
                            </h1>
                        </div>
                        <div className="App-header-fb" />
                    </div>
                </nav>
                <div className="App-body">
                    <div className="App-body-left">
                        <ul>
                            {leftList.map((item, index) => {
                                return (
                                    <li key={`li-${index}`}>
                                        {item}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="App-body-middle">
                        {posts.map((post, index) => {
                            return <Card post={post} key={`card-${index}`} />;
                        })}
                    </div>
                    <div className="App-body-right">這邊只有一堆廣告</div>
                </div>
            </div>
        );
    }
}

export default App;
