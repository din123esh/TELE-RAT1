const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7924032271:AAFSxUm1DOSJKSqnExs0RwMSCSq5mRy_7A4',
  id: isNaN(parsedId) ? 1603022382 : parsedId // replace 12345.. with your telegram chat id
};
