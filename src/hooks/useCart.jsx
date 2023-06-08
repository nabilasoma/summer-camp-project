import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
    const {user} = useContext(AuthContext);

    const { isLoading, refetch, data: cart= [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async() => {
            const res = await fetch(`http://localhost:4000/instructors?email=${user?.email}`)
            return res.json()
        }
      })
      return [cart, isLoading, refetch]
}

export default useCart;