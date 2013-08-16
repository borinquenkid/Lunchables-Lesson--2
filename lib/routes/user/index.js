module.exports = function(app) {
	app.get('/users', user.list);
};