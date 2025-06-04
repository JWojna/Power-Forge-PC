const router = require('express').Router();

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

// GET /api/restore-user
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

module.exports = router;
