module.exports = {
  up(db) {
    return db.collection('Articles').updateMany({}, { $rename: { text: 'content' } });
  },

  down(db) {
    return db.collection('Articles').updateMany({}, { $rename: { content: 'text' } });
  },
};
