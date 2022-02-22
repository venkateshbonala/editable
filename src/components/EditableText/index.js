import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    editableText: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({editableText: !prevState.EditableText}))
  }

  render() {
    const {editableText} = this.state
    const buttonText = editableText ? 'Save' : 'Edit'
    return (
      <div className="bg-container">
        <div className="edit-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="input-container">
            <input type="text" className="input" />
            <button type="button" className="button">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
