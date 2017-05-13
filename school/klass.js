var student = require('./student');
var teacher = require('./teacher.js');
function add(teacherName, students) {
	students.forEach(function(item, index){
		student.add(item);
	})
	teacher.add(teacherName);
}

exports.add = add
