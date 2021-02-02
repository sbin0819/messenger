import { useState, useEffect } from 'react';
import ProfileComponent from '../components/Profile';
import { firestore } from '../firebase/firebase';
import { config } from 'dotenv';
config();
const Playground = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    const getFireStore = async () => {
      const snapshot = await firestore.collection('posts').get();
      const posts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(posts);
    };
    getFireStore();
  }, []);

  return (
    <>
      <div>
        <h1>context api 연습 페이지</h1>
      </div>
    </>
  );
};

export default Playground;
