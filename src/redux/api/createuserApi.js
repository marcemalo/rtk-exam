import { api } from "./index";

const createApi = api.injectEndpoints({
    endpoints: (build) => ({
      createUsers: build.mutation({
        query: (body) => ({
          url: "/users",
          method: "POST",
          body
        }),
      }),
    })
})

export const { useCreateUsersMutation } = createApi