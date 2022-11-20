import {Component, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './App.scss'

interface S {
    [key: string] : string
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areaValue: null,
        }
    }

    onChangeEvent = (e: any) => {
        this.setState({
            areaValue: e.target.value
        })
    }

    render() {
        const { areaValue }: Readonly<S> = this.state;
        return (
            <div className="App">
                <textarea className={"textarea"} name="markdown" onChange={(e) => this.onChangeEvent(e)} id="editor"></textarea>
                <ReactMarkdown children={areaValue}/>
            </div>
        )
    }
}

export default App
