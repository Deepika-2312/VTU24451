import App from "../App";
import React, { useEffect, useState } from "react";
import fetchNotification from "../Scripts/db";
import axios from "axios";

function Display() {
    const [notification, setNotification] = useState([]);
    useEffect(() => {
    const token = "eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcmlzaG5hcmFvZGVlcGlrYUBnbWFpbC5jb20iLCJleHAiOjE3ODE2NzM2MjQsImlhdCI6MTc4MTY3MjcyNCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImRkZTRhNTdlLWEyNjEtNGM3Yi1iNGZlLTc3NmRlMTYzZTc2YiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImJvZGFwYXRpIHBoYW5pIGRlZXBpa2EiLCJzdWIiOiIwYjE2ZGZkMy05MGYzLTQ2YTgtOGVkZi0xMzMyNjZlZGQ3N2EifSwiZW1haWwiOiJrcmlzaG5hcmFvZGVlcGlrYUBnbWFpbC5jb20iLCJuYW1lIjoiYm9kYXBhdGkgcGhhbmkgZGVlcGlrYSIsInJvbGxObyI6InZ0dTI0NDUxIiwiYWNjZXNzQ29kZSI6Imp1RnBodiIsImNsaWVudElEIjoiMGIxNmRmZDMtOTBmMy00NmE4LThlZGYtMTMzMjY2ZWRkNzdhIiwiY2xpZW50U2VjcmV0IjoiTnFKRHhSZmhwWUVwRXJtUCJ9.PnMAcENwPqReFddHuUJ5Dl6mr1XookB3G0CGPTtQqoU";
    axios.get("http://4.224.186.213/evaluation-service/notifications", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => setNotification(response.data))
    .catch(error => console.error("Error fetching notifications:", error));
  }, []);
    return (
        <div className="Notifications-box">
            <h2>Notifications</h2>
            <ul>
                {notification.map((note, index) => (
                    <li key={index}><strong>{note.title}</strong> — {note.message}</li>))}
            </ul>
        </div>
    );
}

export default Display;