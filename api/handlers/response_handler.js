const error = (err, res) =>
  res.status(err.code).json({
    status: false,
    message: err.message
  });

const success = (res, rows) =>
  res.status(200).json({
    status: true,
    data: rows,
    message: res.message
  });

module.exports = {
  error,
  success
};
