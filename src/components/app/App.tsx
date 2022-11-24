import {Component, useState} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './App.scss'

interface S {
    [key: string]: string
}

class App extends Component {
    constructor({props}: { props: any }) {
        super(props);
        this.state = {
            areaValue: `# This is a markdown header
## This is a sub-header

[This is a link](freecodecamp.org)

\`This is in-line code: 1 + 1 = 2\`

\`\`\`
This is a code block
var a = 3
var b = 2
var c = a + b //c returns 5
\`\`\`

Here is a list:
- list item

> This is a block quote

This is **bolded text**

![React Logo w/ Text](https://logos-download.com/wp-content/uploads/2016/09/React_logo_small.png )
`,
        }
    }


    onChangeEvent = (e: any) => {
        this.setState({
            areaValue: e.target.value
        })
    }

    render() {
        const {areaValue}: Readonly<S> = this.state;
        return (
            <div className="App">
                <textarea className={"textarea"} name="markdown" onChange={(e) => this.onChangeEvent(e)}
                          id="editor" value={areaValue}></textarea>
                <div id="preview">
                    <ReactMarkdown children={areaValue} remarkPlugins={[remarkGfm]}/>
                </div>
            </div>
        )
    }
}

export default App
