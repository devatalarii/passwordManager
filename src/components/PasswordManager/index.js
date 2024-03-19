import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPasswords from '../YourPasswords'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    count: 0,
    isFavorite: false,
    searchWebsite: '',
  }

  OnChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  OnChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  OnChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const passwordItem = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, passwordItem],
      username: '',
      password: '',
      website: '',
    }))
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({isFavorite: !prevState.isFavorite}))
  }

  deleteItem = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(eachItem => eachItem.id !== id)
    this.setState({passwordList: filteredList})
    this.setState(prevState => ({count: prevState.count - 1}))
  }

  onChangeSearchInputValue = event => {
    this.setState({searchWebsite: event.target.value})
  }

  render() {
    const {
      username,
      password,
      website,
      passwordList,
      count,
      isFavorite,
      searchWebsite,
    } = this.state
    const searchedResults = passwordList.filter(eachItem =>
      eachItem.website.toUpperCase().includes(searchWebsite.toUpperCase()),
    )

    return (
      <div className="bg-container">
        <img
          className="title-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="AddNewPassword-container">
          <div className="AddNewPassword-card">
            <h1 className="title">Add New Password</h1>
            <form
              className="update-password-form"
              onSubmit={this.onSubmitButton}
            >
              <div className="input-1">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />
                <hr className="line-style" />
                <input
                  className="input-text"
                  type="text"
                  placeholder="Enter Website"
                  onChange={this.OnChangeWebsite}
                  value={website}
                />
              </div>
              <div className="input-2">
                <img
                  className="username-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <hr className="line-style" />
                <input
                  className="input-text"
                  type="text"
                  placeholder="Enter Username"
                  onChange={this.OnChangeUsername}
                  value={username}
                />
              </div>
              <div className="input-3">
                <img
                  className="password-logo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <hr className="line-style" />
                <input
                  className="input-text"
                  type="password"
                  placeholder="Enter Password"
                  onChange={this.OnChangePassword}
                  value={password}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="image-container">
            <img
              className="password-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>
        <div className="YourPassword-container">
          <div className="searchInput-title">
            <div className="title-container">
              <h1 className="heading">Your Passwords</h1>
              <p className="count">{count}</p>
            </div>
            <div className="input-bar">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <hr style={{height: '100%', color: '#94a3b8'}} />
              <input
                className="search-bar"
                type="search"
                placeholder="Search"
                value={searchWebsite}
                onChange={this.onChangeSearchInputValue}
              />
            </div>
          </div>
          <hr style={{width: '100%', color: '#b6c3ca'}} />
          <div className="checkBox-container">
            <input
              className="check-box"
              type="checkbox"
              id="check"
              onClick={this.onClickCheckBox}
            />
            <label className="label-style" htmlFor="check">
              Show Passwords
            </label>
          </div>
          <ul className="unordered-list">
            {searchedResults.length > 0 ? (
              searchedResults.map(eachItem => (
                <YourPasswords
                  passwordDetails={eachItem}
                  key={eachItem.id}
                  isFavorite={isFavorite}
                  deleteItem={this.deleteItem}
                />
              ))
            ) : (
              <div className="no-password-container">
                <img
                  className="noPassword-image"
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                />
                <p className="noPassword-heading">No Passwords</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
