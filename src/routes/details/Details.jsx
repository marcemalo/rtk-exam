import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../redux/api/productsApi";
import { Container } from "../../utils";
import { Card, Typography, Spin } from 'antd';

const { Meta } = Card;
const { Text } = Typography;

const Details = () => {
    const { id } = useParams();
    const { data, isLoading, isError } = useGetUserByIdQuery(id);

    console.log(data);

    if (isLoading) return <Spin className="m-auto" size="large" />;
    if (isError) return <div>Error loading user details.</div>;

    const user = data?.data;

    return (
        <div className='my-10 flex m-auto'>
        <Container>
            <div className='flex flex-wrap gap-4 justify-center'>
                {user && (
                    <Card
                        key={user.id}
                        className='w-60 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105'
                    >
                        <div className='relative'>
                            <img
                                alt={`${user.first_name} ${user.last_name}`}
                                src={user.avatar}
                                className='w-full h-40 object-cover rounded-t-lg'
                            />
                        </div>
                        <div className='p-4'>
                            <Meta 
                                title={<span className='text-lg font-semibold'>{`${user.first_name} ${user.last_name}`}</span>} 
                                description={<span className='text-gray-600'>{user.email}</span>} 
                            />
                        </div>
                    </Card>
                )}
            </div>
        </Container>
    </div>
    
    );
}

export default Details;

