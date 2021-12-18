const { Model, DataTypes } = require("sequelize")

class Encript extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
              name: DataTypes.STRING
            }, {
              sequelize,
              tableName: "encripts"
        });
    }
}

module.exports = Encript;