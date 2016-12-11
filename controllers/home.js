/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  const defaultLink = 'QmS2guUgmN9mR6pX7gXS6Q8gUR7fNWGhq8MnJYFDPhNkMe';
  const ipfsLink = req.param('v', defaultLink);
  res.render('home', {
    title: 'Home',
    link: ipfsLink
  });
};
