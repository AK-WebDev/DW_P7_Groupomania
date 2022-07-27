module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            min: 2,
            max: 20,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: true,
            min: 2,
            max: 35,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            min: 5,
            max: 40,
        }
    });

    return Users;
}