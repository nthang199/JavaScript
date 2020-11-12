#Hoisting

    Hành vi mặc định của JS để chuyển các khai báo lên trên đầu scope hiện tại.

#Scope & Closure (Lexical Scope):

    Phạm vi sử dụng.

##Scope have two type of scope:global/local(biến toàn cục/ biến cục bộ).

##Closure:

    Biến ở scope cha có thể được truy cập bởi scope con. Không có chiều ngược lại.

#DataType
##Number:

    64 bit. không phân biệt các loại số int,float,double,bigint.

###Methods:

    toString() chuyển số thành String.

    toFixed(number):trả về số dang thập phân có number sau dấu phẩy.(làm tròn lên /xuống).

    toPrecisison(number):chuỗi số có độ dài number.

    valueOf():trả về 1 số (không dùng).

###Convert:

    Number():chuyển đổi các biến về dạng số ( Ex: Number(true)=1; Number("10.33")=10.33;Number("10,33")=NAN;) (Dùng cho cả Datetime:số miligiay)

    parseInt() :trả về số nguyên.

    parseFloat():trả về một số có thể là float/nguyên.

###MAX_VALUE/MIN_VALUE/POSITIVE_INFINITY/NEGATIVE_INFINITY.

##String:

    var str1="Name";

    var str2=new String("name").

###Methods:

    length:độ dài chuỗi.
    indexOf(str [,number]):vị trí xuất hiện đầu tiền của chuỗi từ vị trí number trở đi.( =-1 nếu không có chuỗi cần tìm)
    lastIndexOf(str [,number]):vị trí cuối cùng xuất hiện chuỗi từ vị trí number trở đi.( =-1 nếu không có chuỗi cần tìm).
    search(str):chỉ trả về vị trí đầu tiên của str ko tìm được ví trí thứ 2.
    slice(number1 [,number2]):cắt chuỗi từ number1 đến number 2, nếu không có number 2 nhận chuỗi mới từ number1 đến hết.(số âm tính cuối lên.)
    substring(number1 [,number2]):~slice() không có trường hợp number âm.
    substr(number [,length]):~slice():length là độ dài của chuỗi mới.
    replace(str1,str2): thay thế str1 =str2 ở vị trí đầu tiên tìm thấy.(Có phân biệt hoa thường) /str1/i :không phân biệt hoá thường. /str1/g : thay thế toàn bộ. Dùng được biểu thức chính quy.
    toUpperCase()
    toLowerCase()
    concat(str1,str2):nối chuỗi.
    trim():bỏ khoảng trắng ở 2 đầu của string.
    split("char"):string->array bằng kí tự char.

#Date

    new Date();
    new Date(year, month, day, hours, minutes, seconds, milliseconds);
    new Date(miliseconds);
    new Date(string);
    ###Methods:
    parse(); chuyển ngày thành số miliseconds.
    getFullYear()
    getMonth()
    getDate()
    getHours()
    getMinutes()
    ...
    setFullYear()
    setMonth()
    ...
    #Array
    var array=[];
    var array= new Array();

##Methods:

    toString():array ->string nối bởi dấu ","
    join("char"):array->string nối bởi char.
    pop():bỏ phần tử cuối mảng trả về phần tử cuối vừa được lấy ra.
    shift():~pop(): phần tử đầu mảng.
    push():thêm phần tử vào cuối mảng. trả về số phần tử của mảng mới.
    unshift():~push():thêm vào đầu mảng.
    slice(index,number [,array]):thêm các phần tử mới vào từ vị trí index và xoá đi number phần tử bắt đầu từ index.
    concat(array);nôi mảng array vào mảng hiện tại.
    slice():cắt mảng.
    sort():sắp xếp mảng tăng dần.
    reverse():đảo ngược các phần tử của mảng.
    forEach();gọi lại hàm cho mỗi phần tử của array.
    map():mỗi phần tử của mảng thực hiện hàm và trả về 1 mảng mới.
    filter():trả về mảng mới với các phần tử thoả mãn điều kiện.
    reduce(): không làm thay đổi mảng gốc.

##Object

###Khai báo object:

    let object={
    firstName:"",
    lastName:"",
    fullName:function(){
    return this.firstName + " " + this.lastName;
        }
    }

#Condition statement:

##if, if...else, if.... else if....
##Conditional

    conditional ? exprT : exprF;

#Ọbject:

##prototype object:

    function là 1 object. khi function được khởi tạo thì mặc đinh có property là prototype.
    prototype :để khai báo những hàm dùng chung cho các object.

##Inheritance

    ES6  trở đi kế thừa giống C#,Java:dùng class và extends => kế thừa cả prototype => ngắn gọn dễ dàng.
    ES5 trở xuống cần kế thừa cơ bản và kế thừa prototype.

#Immutable/Mutable

##Immutable:

    trạng thái dữ liệu không thay đổi được.

##Muable:

    trạng thái dữ liệu thay đổi được.

#Pass by value/Pass by reference

##pass by value:tham trị

    khi thay đổi giá trị biến trong hàm thì ngoài hàm sẽ không bị ảnh hưởng.
    kết thúc hàm giá trị của biến vẫn giữu nguyên.
    kiểu dữ liệu primitive: string ,number,null,undefined,boolean.

##pass by reference:tham chieu

    khi thay đổi giá trị bên trong hàm thì ra ngoài hà, sẽ bị thay đổi theo.
    kiểu dữ liệu non-primitive: object , array,...
    tricks: gán hẳn 1 giá trị mới cho param.
