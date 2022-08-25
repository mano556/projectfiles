import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./profile_table.css"
import { Link } from "react-router-dom";


function Profile_table() {
    const [datas, setData] = useState([]);
    useEffect(() => {
        handleClick();
    }, [])

    async function handleClick() {
        const result = await axios.get("http://localhost:8080/show/book");
        setData(result.data);
        console.log(result.data);
    }
   
    return (
        <div class="container-xxl mt-3 border">
            
            <h1 >Book Details</h1>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ISBN NO.</th>
                        <th>Book name</th>
                        <th>Author</th>
                        <th>Total Copies</th>
                        <th>Available copies</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                {datas.map(function fn(item) {
                    return (
                        <tbody>
                            <tr>
                                <th>{item.isbn_NO}</th>
                                <td>{item.bookname}</td>
                                <td>{item.author}</td>
                                <td>{item.total_copies}</td>
                                <td>{item.available_copies}</td>
                                <td><button  type="button" class="btn btn-info">Edit</button></td>
                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    );
                })}
            </table>
            {/* <button  type="button" class="btn btn-success">Add book</button> */}
            <Link to='admin'><button  type="button" class="btn btn-success">Add book</button></Link>&nbsp;&nbsp;&nbsp;
            {/* <a href="/admin">Add book</a> */}
        </div>
    );



}
export default Profile_table