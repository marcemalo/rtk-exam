import { useGetUserQuery } from '../../redux/api/productsApi';

import { Button, Card } from 'antd';
import { Container } from '../../utils';
import { Link } from 'react-router-dom';



const { Meta } = Card;

const Products = () => {
    
    const {data} = useGetUserQuery();
    
    

    console.log(data)
   
  return (
    <>
    <div className='my-10'>
    <Container>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
                {data?.data.map((user) => (
                    <Card
                        key={user.id}
                        style={{ width: 240 }}
                        cover={<img alt={`${user.first_name} ${user.last_name}`} src={user.avatar} />}
                    >
                        <Meta title={`${user.first_name} ${user.last_name}`} description={user.email} />
                        <Link to={`/users/${user.id}`}>
                            View Details
                        </Link>
                        <Link to={`${user.id}`}>
                        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3 mt-3'>Delete</button>
                        </Link>
                    </Card>
                ))}
            </div>
        </Container>
    </div>
    </>
  )
}

export default Products