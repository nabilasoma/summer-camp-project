import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        // queryFn: async() => {
        //     const res = await fetch(`http://localhost:4000/selectedClasses?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     return res.json()
        // }
        queryFn: async() => {
            const res = await axiosSecure(`/selectedClasses?email=${user?.email}` )
            console.log('res from axios', res)
            return res.data;
        }
      })
      return [selectedClass, isLoading, refetch]
}

export default useCart;