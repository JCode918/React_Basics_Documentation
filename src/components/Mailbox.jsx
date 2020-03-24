import React from 'react'

export const Mailbox = (props) => {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h2>Hello</h2>
      {unreadMessages.length > 0 && (
        <h3>You Have {unreadMessages.length} unread Messages</h3>
      )}
    </div>
  );
};

export default Mailbox;