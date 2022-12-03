type Student = {
	name: string,
  id?: number | string,
	age: number,
	department: string
};

type Teacher =  Student & {
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