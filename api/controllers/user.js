const dbConnection = require("../../config/db_connection");
const queryHandler = require("../handlers/query_handler");
const responseHandler = require("../handlers/response_handler");
const contractHelper = require("../helpers/contract_helper");

const validateUser = (req, res) => {
  dbConnection.query(
    queryHandler.getUserByAddress,
    [req.query.address],
    (err, rows) => {
      if (err) {
        err.code = 400;
        return responseHandler.error(err, res);
      }
      if (rows.length !== 0) {
        if (rows[0].assigned_amount !== "0") {
          res.message = "valid user";
          const data = {
            id: rows[0].id,
            clientID: rows[0].client_id,
            address: rows[0].address,
            assigned_amount: rows[0].assigned_amount,
            private_key: rows[0].private_key,
            validate: "1"
          };
          console.log("got user")
          return responseHandler.success(res, data);
        } else {
          const error = {
            message: "no amount left",
            code: 400
          };
          return responseHandler.error(error, res);
        }
      } else {
        const error = {
          message: "not a valid user",
          code: 400
        };
        return responseHandler.error(error, res);
      }
      // return rows.length !== 0
      //   ? rows[0].assigned_amount !== "0"
      //     ? res.send("1")
      //     : res.send("0")
      //   : res.send("0");
    }
  );
};

const withdrawFunds = async (req, res) => {
  let smartContract = await contractHelper.getCommunityChestContract();
  console.log(smartContract);
};

module.exports = {
  validateUser,
  withdrawFunds
};
