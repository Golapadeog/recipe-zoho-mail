module.exports = Franz => {
  const getMessages = function getMessages() {
    var c = $(".jsZmTreeText:contains('Unread')")
      .closest('.zmTreeNode')
      .find('.zmTreeCount')
      .text();
    // set Franz badge
    Franz.setBadge(c.length == 0 ? 0 : c);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
