var klass = require('./klass.js');
function add(klasses) {
	klasses.forEach((item, index) => {
		var _klass = item;
		var teacher = item.teacherName;
		console.log('teacher', teacher);
		var students = item.students;
		klass.add(teacher, students);
	})
}
exports.add = add;
