import StudentCards from "./StudentCards";

function chipdeptrai(){
    const students = [
  {
    id: 'DE160182',
    name: 'Lê Vấp Cỏ',
    location: 'DaNang',
    img: '/images/anh7.jpg'
  },
  {
    id: 'DE160377',
    name: 'Nguyễn Vấp Gió',
    location: 'QuangNam',
    img: '/images/anh10.jpg'
  },
  {
    id: 'DE160547',
    name: 'Làm giàu cho bệnh viện',
    location: 'QuangNam',
    img: '/images/anh11.jpg'
  },
  {
    id: 'DE170049',
    name: 'Thể Thao là...',
    location: 'DaNang',
    img: '/images/anhthe.jpg'
  }
];
    return(
        <div> 
            <h1>Toan tre trau Trung cute</h1>
              <StudentCards key={student.id} {...student} />
        </div>
    



    );
}
export default chipdeptrai