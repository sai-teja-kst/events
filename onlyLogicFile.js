import './index.css'

const registrationConstants = {
  notStarted: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const renderRegister = () => (
  <div>
    <h1>Register</h1>
  </div>
)

const renderNotStarted = () => (
  <div>
    <h1>Not Started</h1>
  </div>
)

const renderClosed = () => (
  <div>
    <h1>Closed</h1>
  </div>
)

const renderInitial = () => (
  <div>
    <h1>Home</h1>
  </div>
)

const ActiveEventRegistrationDetails = props => {
  const {ActiveRegistrationStatus} = props

  switch (ActiveRegistrationStatus) {
    case registrationConstants.registered:
      return renderRegister()
    case registrationConstants.notStarted:
      return renderNotStarted()
    case registrationConstants.closed:
      return renderClosed()
    default:
      return renderInitial()
  }
}

export default ActiveEventRegistrationDetails
