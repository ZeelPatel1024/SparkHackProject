import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function BusinessOwnersList() {
    const [Owners, setOwners] = useState([]);

    useEffect(() => {
        (async () => await Buisness())();
      }, []);

    async function Buisness(){
        const result = await axios.get(
          "http://localhost:8080/api/v1/business/getAll");
          setOwners(result.data);
          console.log(result.data);
      }

    return (
        <div className="business-owners-container">
            <h1>Businesses</h1>
            
            <div className="table-container">
                <table className="owners-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Owners.map((owner) => (
                            <tr key={owner.id}>
                                <td>{owner.name}</td>
                                <td>{owner.location}</td>
                                <td>{owner.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}