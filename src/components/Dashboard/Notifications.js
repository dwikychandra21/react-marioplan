import React, { useEffect, useRef } from "react";
import moment from "moment";
import { connect } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import Push from "push.js";

import { setToRead } from "../../store/actions/notification";
import audio from "../../assets/audio/tink.wav";
import reactLogo from "../../assets/img/favicon.ico";

const Notifications = props => {
  const { notifications, username } = props;
  const firestore = useFirestore();
  const notifAudio = new Audio(audio);

  const timer = useRef(false);

  useEffect(() => {
    clearTimeout(timer.current);
    return () => clearTimeout(timer.current);
  }, [notifications])

  const setReadedNotification = (id, user, content) => {
    // Push.create(`${user}`, {
    //   body: `${content}`,
    //   icon: reactLogo,
    //   timeout: 5000,
    //   vibrate: [200, 100],
    //   onClick: function() {
    //     console.log(this);
    //   }
    // });
    // notifAudio.play();
    timer.current = setTimeout(() => {
      props.onReadedNotification(id, firestore);
    }, 5000);
  };

  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => {
                if (item.user !== username) {
                  const unread = item.status === "unread";
                  if (unread)
                    setReadedNotification(item.id, item.user, item.content);
                  return (
                    <li key={item.id}>
                      <span className="pink-text">{item.user} </span>
                      <span>{item.content} </span>
                      {unread ? <span className="new badge" /> : null}
                      <div className="grey-text note-date">
                        {moment(item.time.toDate()).fromNow()}
                      </div>
                    </li>
                  );
                } else {
                  return null;
                }
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onReadedNotification: (id, firestore) => dispatch(setToRead(id, firestore))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Notifications);
