import React, { useContext, useState ,useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
  onSnapshot
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Searchtwo = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err , setErr ] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const q = (collection(db,"Users"),where("displayName" , "==" , username))
 
  const handleSearch = async () => {
    const q = query(
      collection(db, "Users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
       console.log(user.uid)
    //check whether the group(chats in firestore) exists, if not create
    const combinedId =
 
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "Chats", combinedId));

      if (!res.exists()) {
        //create a chat in chats collection
        await setDoc(doc(db, "Chats", combinedId), { messages: [] });

        //create user chats
        await updateDoc(doc(db, "UserChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "UserChats", user.uid), {
         
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
         
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("")
    
     
  };
  const qu = query(
    collection(db, "Users"),
    where("email", "==", "t2@gmail.com"))

    const getdata = ()=>{
      onSnapshot(qu,(data)=>{
        console.log("dfhxfghxfghxfgxcghxgh")
       data.docs.map((item) => {
        
          setUser(item.data())
        })
      })
      setUser(null);
    setUsername("")
    }
  useEffect(()=>{
    getdata();
  },[])
  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
         onKeyDown={handleKey}
         onChange={(e)=>setUsername(e.target.value)}
         value={username}
          
        />
      </div>
  {err && <span>User not found!</span>

  }   
     
       {user &&
        <div className="userChat"
         onClick={handleSelect} 
         >
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
    
   
       } 
       </div>
  );
};

export default Searchtwo;
