// import { useEffect, useState } from "react";

// import { useEffect } from "react";

import { useEffect, useState } from "react"

// export const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get("..");
//         setUsers(res.data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setUsers(false);
//       }
//     };
//     fetchUsers();
//   }, []);
//   if (loading) return <p>Loading...</p>;

//   return (
//     <div>
//       <ul>
//         {users.map((u) => (
//           <li key={u.id}>{u.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export function searchBox() {
// const [query,setQuery] = useState("")

// useEffect(() => {
//     const timeOut = setTimeout(() => {
//         if(query)
//     })
// },[])

//     return <input onChange={(e) => } />
// }

// const arr = [12,5,5,7,8,9];
// const unique = [...new Set(arr)];

// console.log(unique);

// const str = "shubham";
// const reversed = str.split("").reverse().join("")
// console.log(reversed)

// fetch("/api").then(res => res.json()).then(console.log)/
// async function getData() {
//     const res = await fetch("");
//     const data = await res.json();
//     console.log(data)
// }

export function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; //bearee token
    if(!token) return res.status(401).json({ message: 'NO token proviede'})

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Invalid Token"})
    }

    }


function child({ name }) {
  return <p>Hello{name}</p>
}

function Parent() {
  const [name, setName] = useState("shubham");
  return <child name={name} />
}

useEffect(() => {
  fetch("/api/users")
    .then((res) => res.json())
    .then(data => console.log(data))
}, [])



const storage = multer.diskStorage({
  destination: ( req, file, cb ) => {
    cb(null, "uploads/")
  },
  filename: ( req, file, cb ) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = "";
  const ext = allowedTypes.test(path.extname(file.originalname).toLowercase());
  
}



