import 'bootstrap/dist/css/bootstrap.min.css';

import StudentCard from './StudentCard';

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

function StudentCards() {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">Students Detail</h2>
      <div className="row">
        {students.map(student => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
}
export default StudentCards;
