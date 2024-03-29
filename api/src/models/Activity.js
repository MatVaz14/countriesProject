const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.ENUM(['1','2','3','4','5']),
        },
        duration: {
            type: DataTypes.STRING,
        },
        season: {
            type: DataTypes.ENUM(['Verano', 'Otoño', 'Invierno', 'Primavera'])
        }
    },{timestamps: false,})
}