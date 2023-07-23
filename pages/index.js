import { Inter } from 'next/font/google'
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@/redux/slices/userSlice';
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(props.user));
  }, []);
  // if (!user) return <p>Loading...</p>
  return (
    <div>
      {user ? (
        <div>
          <p className='text-primary'>Name: {user.name}</p>
          <p className='text-secondary font-bold'>Age: {user.age}</p>
        </div>
      ) : (
        <p className='text-yellow-500'>No user data available. Please sign in.</p>
      )}
    </div>
  )
};



export async function getServerSideProps(context) {
  // const session = await getSession(context);
  // const initialReduxState = {
  //   user: {
  //     user: { name: "inderjit", age: 22 }
  //   },
  //   // Add other initial states as needed
  // };
  const user = { name: "inderjit", age: 22 }
  return {
    props: {
      user
    },
  };
}
