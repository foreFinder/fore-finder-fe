import { Link } from 'react-router-dom';
import './PostResultMessage.css';

function displaySuccess() {
  return (
    <div className='message'>
      <p>Congrats, your tee time has been created!</p>
      <Link to='/dashboard'>Back to Dashboard</Link>
    </div>
  );
}

function displayError() {
  return (
    <div className='message'>
      <p>
        Sorry, we weren't able to send your event invitation. Please try again
        later.
      </p>
      <Link to='/dashboard'>Back to Dashboard</Link>
    </div>
  );
}

function PostResultMessage({ postError, refreshEvents }) {
  return (
    <div className='result-message' onClick={!postError && refreshEvents}>
      {postError ? displayError() : displaySuccess()}
    </div>
  );
}

export default PostResultMessage;
