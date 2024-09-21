import { useGetUserQuery } from '../../redux/api/productsApi';
import { useDeleteUserMutation } from '../../redux/api/deleteApi';
import { Button, Card } from 'antd';
import { Container } from '../../utils';
import { Link } from 'react-router-dom';



const { Meta } = Card;

const Products = () => {

    const { data } = useGetUserQuery();
    const [deleteUser] = useDeleteUserMutation();

    const handleDeleteUser = (id) => {
        deleteUser({ id })
    }

    console.log(data);


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
                             
                               

                                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3 mt-3' onClick={() => document.getElementById('my_modal_1').showModal()}>Delete</button>
                                <dialog id="my_modal_1" className="modal rounded-lg bg-white">
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">Warning</h3>
                                        <p className="py-4">Are you sure you want to delete this user?</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                <button onClick={() => handleDeleteUser(user.id)} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-3 mt-3'>Delete</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </Card>
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Products