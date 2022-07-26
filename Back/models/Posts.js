module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define('Posts', {
        postText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userPic: {
            type: DataTypes.STRING,
            allowNull: true
        },

    });

    return Posts;
}