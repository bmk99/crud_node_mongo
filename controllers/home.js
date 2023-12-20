// controllers/home.js

// Function to handle /homeName route
const homeName = (req, res) => {
    const requestData = req.body.name;
    res.json({ message: 'Request received for /homeName', data: requestData });
  };
  
  // Function to handle /homeQuery route
  const homeQuery = (req, res) => {
    const requestData = req.body.name;
    const queryParameterId = req.query.id;
    res.json({
      message: 'Request received for /homeQuery',
      data: requestData,
      queryParameterId: queryParameterId,
    });
  };
  
  // Function to handle /homeParams/:id route
  const homeParams = (req, res) => {
    const {name }= req.body
    const urlParameterId = req.params.id;
    res.json({
      message: 'Request received for /homeParams/:id',
      data : name,
      urlParameterId: urlParameterId,
    });
  };
  
  module.exports = { homeName, homeQuery, homeParams };
  