const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
    const header = fs.readFileSync(path.join(__dirname, '../header.html'), 'utf8');
    let pagePath = 'index.html'; // default page
    if (req.query.page === 'about') {
        pagePath = 'html/about.html';
    } else if (req.query.page === 'requests') {
        pagePath = 'html/requests.html';
    }
    const mainContent = fs.readFileSync(path.join(__dirname, `../${pagePath}`), 'utf8');

    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(header + mainContent);
};
