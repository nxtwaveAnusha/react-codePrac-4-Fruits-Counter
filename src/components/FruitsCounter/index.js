import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onMangoIncreament = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onBananaIncreament = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango} = this.state
    const {banana} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">
            Bob ate<span className="fruit-count">{mango}</span> mangoes
            <span className="fruit-count">{banana}</span> bananas
          </h1>
          <div className="fruit-container">
            <div className="mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img-size"
              />
              <button className="btn" onClick={this.onMangoIncreament}>
                Eat Mango
              </button>
            </div>
            <div className="banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-size"
              />
              <button className="btn" onClick={this.onBananaIncreament}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
