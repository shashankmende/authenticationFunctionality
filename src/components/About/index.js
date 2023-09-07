import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

class About extends Component {
  onClickLogOut = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
    console.log('logout btn is clicked')
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <ul className="unordered-list">
          <Header />
        </ul>
        <h1>About Route</h1>
        <button
          type="button"
          className="logout-button"
          onClick={this.onClickLogOut}
        >
          Logout
        </button>
      </>
    )
  }
}

export default About
