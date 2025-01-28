import { axiosInstance } from '@credence/api';
import { Table } from '@credence/ui';
import { QueryClient } from '@tanstack/react-query';
import React from 'react'

const Orders = async () => {
    const queryClient = new QueryClient();

    const fetchUsers = async () => {
        const response = await axiosInstance.get('users', {});
        return response.data;
    };

    const usersData = await queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: fetchUsers,
    });
  return (
    <div>
        <Table data={usersData} />
    </div>
  )
}

export default Orders;