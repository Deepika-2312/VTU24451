import axios from 'axios';

async function fetchNotification() {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcmlzaG5hcmFvZGVlcGlrYUBnbWFpbC5jb20iLCJleHAiOjE3ODE2NzM2MjQsImlhdCI6MTc4MTY3MjcyNCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImRkZTRhNTdlLWEyNjEtNGM3Yi1iNGZlLTc3NmRlMTYzZTc2YiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImJvZGFwYXRpIHBoYW5pIGRlZXBpa2EiLCJzdWIiOiIwYjE2ZGZkMy05MGYzLTQ2YTgtOGVkZi0xMzMyNjZlZGQ3N2EifSwiZW1haWwiOiJrcmlzaG5hcmFvZGVlcGlrYUBnbWFpbC5jb20iLCJuYW1lIjoiYm9kYXBhdGkgcGhhbmkgZGVlcGlrYSIsInJvbGxObyI6InZ0dTI0NDUxIiwiYWNjZXNzQ29kZSI6Imp1RnBodiIsImNsaWVudElEIjoiMGIxNmRmZDMtOTBmMy00NmE4LThlZGYtMTMzMjY2ZWRkNzdhIiwiY2xpZW50U2VjcmV0IjoiTnFKRHhSZmhwWUVwRXJtUCJ9.PnMAcENwPqReFddHuUJ5Dl6mr1XookB3G0CGPTtQqoU";
    const resp = await axios.get(
        "http://4.224.186.213/evaluation-service/notifications",
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
        }
    );
    return resp.data;
}

export default fetchNotification;