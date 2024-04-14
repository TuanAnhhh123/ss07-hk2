// Định nghĩa kiểu dữ liệu cho đối tượng sinh viên
interface Student {
    id: number;
    name: string;
    class: string;
}

// Hàm lọc sinh viên theo lớp
function filterStudentsByClass(students: Student[], className: string): Student[] {
    return students.filter(student => student.class === className);
}

// Khởi tạo một mảng chứa các đối tượng sinh viên
const students1: Student[] = [
    { id: 1, name: "Hoa", class: "A" },
    { id: 2, name: "Minh", class: "B" },
    { id: 3, name: "Bông", class: "A" },
    { id: 4, name: "Huệ", class: "C" }
];

// Gọi hàm để lọc sinh viên theo lớp
const classAStudents = filterStudentsByClass(students1, "A");
console.log("Sinh viên trong lớp A:", classAStudents);

const classBStudents = filterStudentsByClass(students1, "B");
console.log("Sinh viên trong lớp B:", classBStudents);
