import React from 'react'
import ReactDOM from 'react-dom'

import hljs from 'highlight.js'
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/darcula.css'
import ReactQuill from 'react-quill'

hljs.configure({
  languages: ['javascript', 'ruby', 'python', 'rust'],
})

const modules = {
  syntax: {
    highlight: text => hljs.highlightAuto(text).value,
  },
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link'],
    ['clean'],
    ['code-block']
  ],

}

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
  'code-block',
]

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <ReactQuill
        theme="snow"
        value={this.state.text}
        onChange={this.handleChange}
        modules={modules}
        formats={formats}
      />
    )
  }
}
 
export default Editor;