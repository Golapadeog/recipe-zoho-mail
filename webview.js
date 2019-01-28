module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
