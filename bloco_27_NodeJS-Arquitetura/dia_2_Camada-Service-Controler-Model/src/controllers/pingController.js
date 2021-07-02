const sendPongMessage = (req, res, next) => {
  return res.status(200).json({ "message": "pong!" })
};

module.exports = sendPongMessage;

