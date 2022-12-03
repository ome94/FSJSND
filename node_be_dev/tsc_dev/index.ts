interface Student {
	name: string,
	age: number,
	department: string
};

interface Teacher {
	name: string,
	age: number,
	department: string,
	title: string
};

const showStudent = (student: Student): string => {
	console.log(`Department of ${student.department}`);
	return student.name;
};

const abiola: Teacher = {
	name: "A.B Abiola",
	department: "WREE",
	age: 15, 
	title: "Ph.D"
};

console.log(showStudent(abiola));