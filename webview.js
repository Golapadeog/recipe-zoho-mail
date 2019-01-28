module.exports = Franz => {
  const getMessages = function getMessages() {
    let count = 0;
    const unreadCountElement = document.querySelectorAll(".unreadCount");

    if (
      unreadCountElement.length > 0 &&
      unreadCountElement[0].innerText.length > 0
    ) {
      const countInElement = unreadCountElement[0].innerText.split(" ")[0];
      if (!isNaN(countInElement)) {
        count = +countInElement;
      }
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
