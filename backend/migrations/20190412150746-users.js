module.exports = {
  up(db) {
    return db.collection('Users').updateMany({}, {
      $set: {
        settings: {
          textColor: '#000',
          backgroundColor: '#FFF',
        },
      },
    });
  },

  down(db) {
    return db.collection('Users').updateMany({}, { $unset: { settings: '' } });
  },
};
