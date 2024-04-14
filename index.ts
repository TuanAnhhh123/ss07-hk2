/*
    1.array
*/
let numbers:number[]=[1,2,3,4];
// Khai báo mảng numbers các phần tử trong mảng number phải là number
let students:string[]=["hoa","hồng","huệ"];

/*
    2.object
    
*/
let obj={
    name:"minh thu",
    address:"hà nội",
    id:1
}
let obj1:{
    name:string,
    address:string,
    id:number
}={
    name:"minh thu",
    address:"hcm",
    id:15,
}

/*
    3.enum
    
*/
enum Role{
    ADMIN,//sẽ đánh số từ 0
    USER
}
let persom:{
    name:string,
    address:string,
    role:Role.ADMIN
}={
    name:"ngọc",
    address:"hn",
    role:0
}

/*
    4.void: áp dụng với function
    -khi hàm ko trả về kết quả j?
    -khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu liệu trả về của hàm
    
*/
function sayHello(){
    console.log("hello");
    
}
sayHello();
function sum(a:number,b:number):number{
    return a+b
}
console.log(sum(3,5));

/*
    5.kiểu unknowm
    tương tự kiểu dữ liệu any nhưng chặc hơn
    khi dùng any thì kiểu dữ liệu truyền vào là j cũng đc
 */
function test(a:any){
    console.log(a.toUpperCase());//viết hoa từ đó lên
    
}
test("h")
function test1(a:unknown){
    // bắt buộc phải kiểm tra kiểu dữ liệu trước khi đu thực hiện phép tính
    console.log(111111,typeof(a));
    
    
    if(typeof(a)==="string"){
        console.log(a.toUpperCase());
    }
}
test1("text")

/*
    6.type never
    thường dùng trong các vòng lặp vô tận
    tức là các vòng lập chạy ko có điểm dừng
    để đo giá trị:
 */
function typeNever():never{
    let a:number = 0;
    while(true){
        console.log("giá trị a",++a);
    }
}
//typeNever()