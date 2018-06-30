import SqliteToMongo from './sqlitetomongo.js';

var importer = new SqliteToMongo('vproker.db', 'mongodb://localhost/vproker', function () {
  importer.importCollection('orders', {
    tableName : "[Order]",
    columns: {
      ID: '_id',
      ClientName: 'clientName',
      ClientPhoneNumber : 'clientPhoneNumber',
      CreatedBy: 'createdBy',
      Description: 'description'
    }
  });
});