


const getCurrentMonth = async (bucket, key) => {
  let date_ob = new Date();

// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
return month;
};

module.exports = {
  getCurrentMonth
};
