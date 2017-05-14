function learn(thing) {
	console.log(thing)
};
function we(callback, learn) {
	learn += ' is call back';
	callback(learn);
}
we(learn, 'nodejs');
