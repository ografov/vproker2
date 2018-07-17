import Sequelize from 'sequelize'
import sequelize from '../db/sequelize';

const Tool = sequelize.define('tool', {
    id: { type: Sequelize.STRING, primaryKey: true, field: 'ID' },
    name: { type: Sequelize.STRING, field: 'Name' },
    description: { type: Sequelize.STRING, field: 'Description' },
    dayPrice: { type: Sequelize.STRING, field: 'DayPrice' },
    pledge: { type: Sequelize.STRING, field: 'Pledge' },
    price: { type: Sequelize.STRING, field: 'Price' },
    workShiftPrice: { type: Sequelize.STRING, field: 'WorkShiftPrice' },
}, {
        tableName: 'Tool', 
        timestamps: false // don't add the timestamp attributes (updatedAt, createdAt)
    });

export default Tool;
