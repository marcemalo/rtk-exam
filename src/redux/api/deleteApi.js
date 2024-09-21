import { api } from ".";

const deleteApi = api.injectEndpoints({
    endpoints: (build) => ({
        deleteUser: build.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
                body: id
            }),
        }),
    }),
});

export const { useDeleteUserMutation } = deleteApi;
export default deleteApi