// Khai báo biến với kiểu dữ liệu any
let variableAny: any = 10;

// Khai báo biến với kiểu dữ liệu unknown
let variableUnknown: unknown = "Hello";

// Sử dụng biến với kiểu dữ liệu any
console.log("Biến với kiểu dữ liệu any:", variableAny);
variableAny = "World";
console.log("Biến với kiểu dữ liệu any sau khi gán giá trị mới:", variableAny);

// Sử dụng biến với kiểu dữ liệu unknown
// Phải kiểm tra kiểu trước khi sử dụng
if (typeof variableUnknown === "string") {
    console.log("Biến với kiểu dữ liệu unknown:", variableUnknown);
} else {
    console.log("Kiểu dữ liệu của biến không xác định trước khi kiểm tra.");
}
