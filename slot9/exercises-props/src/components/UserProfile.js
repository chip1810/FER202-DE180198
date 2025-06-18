
import {Table} from "react-bootstrap";


const UserProfile = ({ user }) => (
    <Table>
       <tbody>
        {name.map((name, index)=> (
            <tr key={index}>
            
            <td>{index+1}</td>
            <td>{name}</td>
            
            </tr>
             
        )
    ) 
}
    </tbody>
    </Table>
);

export default UserProfile;
