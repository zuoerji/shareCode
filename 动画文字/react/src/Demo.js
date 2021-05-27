import React, { Component, Fragment } from 'react'
import './style.css'

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {
        let listItems = this.state.list.map((item, index) =>
            <li
                key={index}
                className="move"
                style={{ top: item.top, left: item.left }}
            >
                {item.value}
            </li>
        )
        return (
            <div>
                <input type="text" ref="text" />
                <button onClick={this.submit.bind(this)}>确定</button>
                <ul>
                    {
                        listItems
                    }
                </ul>
            </div>
        )
    }
    submit() {
        console.log('submit')
        let list = this.refs.text.value.split("")
        let listBox = []
        list.forEach(item => {
            listBox.push({
                top: 20,
                left: 20,
                value: item
            })
        });
        document.documentElement.addEventListener("mousemove", (e) => {
            let mouseX = e.pageX || e.clientX + document.documentElement.scrollLeft;
            let mouseY = e.pageY || e.clientY + document.documentElement.scrollTop;
            if (listBox[0]) {
                listBox[0].top = mouseY;
                listBox[0].left = mouseX;
            }
            for (let i = listBox.length - 1; i >= 1; i--) {
                listBox[i].top = listBox[i - 1].top;
                listBox[i].left = listBox[i - 1].left + 20;
            }
            this.setState({
                list: listBox
            })
        })
    }




}

export default Demo