import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const {tweet} = props;
  console.log(tweet.children);
  return (
    <div className="tweet">
      <ProfileImage image = {tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
            <User userData={props.tweet.user} />
          </span>

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />   

        <div className="actions">
          {/* Font Awesome icons */}
          <Actions />
        </div>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;