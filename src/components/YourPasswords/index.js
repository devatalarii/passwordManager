import './index.css'

const YourPasswords = props => {
  const {passwordDetails, isFavorite, deleteItem} = props
  const {website, username, password, id} = passwordDetails
  const logo = website.slice(0, 1).toUpperCase()
  console.log(isFavorite)
  const onClickDeleteButton = () => {
    deleteItem(id)
  }

  return (
    <li className="list-items">
      <div className="passwordDetails-container">
        <div>
          <p className="logo">{logo}</p>
        </div>
        <div>
          <p className="website-name">{website}</p>
          <p className="username">{username}</p>
          {isFavorite ? (
            <p className="password">{password}</p>
          ) : (
            <img
              className="star-image"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
        </div>
      </div>
      <div>
        <button
          type="button"
          className="delete-button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default YourPasswords
