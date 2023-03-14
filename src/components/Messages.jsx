import '../styles/Message.css'

export const Message = ({ userChoice, computerChoice, userMessage, computerMessage }) => {
  return (
    <div>
      {userChoice !== null && <p className="message">{userMessage}</p>}
      {computerChoice !== null && <p className="message">{computerMessage}</p>}
    </div>
  )
}