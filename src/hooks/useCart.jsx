import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext);

    const { isLoading, refetch, data: selectedClass = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:4000/selectedClasses?email=${user?.email}`)
            return res.json()
        }
      })
      return [selectedClass, isLoading, refetch]
}

export default useCart;