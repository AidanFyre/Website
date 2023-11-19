module.exports = (req, res) => {
    if (req.method === 'POST') {
      // Handle POST request
      const data = req.body;
      console.log('Form submission:', data);
      res.status(200).send({ message: 'Form submitted successfully!' });
    } else {
      // Handle any non-POST requests
      res.status(405).send({ error: 'Only POST requests are allowed' });
    }
  };
  