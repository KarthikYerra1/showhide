import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFNVisible: false, isLNVisible: false}

  showFirstName = () => {
    this.setState(prevState => ({isFNVisible: !prevState.isFNVisible}))
  }

  showLastName = () => {
    this.setState(prevState => ({isLNVisible: !prevState.isLNVisible}))
  }

  render() {
    const {isFNVisible, isLNVisible} = this.state
    const firstName = isFNVisible ? (
      <div className="desc-cont">
        <p className="name">Joe</p>
      </div>
    ) : null
    const lastName = isLNVisible ? (
      <div className="desc-cont">
        <p className="name">Jonas</p>
      </div>
    ) : null

    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="button-content">
              <button
                className="btn"
                type="button"
                onClick={this.showFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstName}
            </div>
            <div className="button-content">
              <button className="btn" type="button" onClick={this.showLastName}>
                Show/Hide Firstname
              </button>
              {lastName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
