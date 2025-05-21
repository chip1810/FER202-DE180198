
const employee = {
  name: 'John Doe',
  age: 30,
  department: 'Engineering'
};

function Ex1() {
  const { name, age, department } = employee;

  return (
    <>
          <h2>Exercise 1 </h2>

      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Department: {department}</p>
    </>
  );
}

export default Ex1;
