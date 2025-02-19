import { TQueryParam, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getAllRegisterSemester: builder.query({
        query: (args) => {
          const params = new URLSearchParams();
  
          if (args) {
            args.forEach((item: TQueryParam) => {
              params.append(item.name, item.value as string);
            });
          }
  
          return {
            url: '/semester-registrations',
            method: 'GET',
            params: params,
          };
        },
        providesTags:['semester'],
        transformResponse: (response: TResponseRedux<TSemester[]>) => {
          return {
            data: response.data,
            meta: response.meta,
          };
        },
      }),
    
      addRegisterSemester: builder.mutation({
        query: (data) => ({
          url: '/semester-registrations/create-semester-registration',
          method: 'POST',
          body: data,
        }),
        invalidatesTags:["semester"]
      }),
      updateRegisterSemester: builder.mutation({
        query: (args) => ({
          url: `/semester-registrations/${args.id}`,
          method: 'PATCH',
          body: args.data,
        }),
        invalidatesTags:["semester"]
      }),
      getAllCourses: builder.query({
        query: (args) => {
          const params = new URLSearchParams();
          if (args) {
            args.forEach((item: TQueryParam) => {
              params.append(item.name, item.value as string);
            });
          }
          return {
            url: '/courses',
            method: 'GET',
            params: params,
          };
        },
        providesTags:['courses'],
        transformResponse: (response: TResponseRedux<any[]>) => {
          return {
            data: response.data,
            meta: response.meta,
          };
        },
      }),
      addCourse: builder.mutation({
        query: (data) => ({
          url: '/courses/create-course',
          method: 'POST',
          body: data,
        }),
        invalidatesTags:["courses"]
      }),
})
})
export const {useAddRegisterSemesterMutation,useGetAllRegisterSemesterQuery,
  useUpdateRegisterSemesterMutation,
  useGetAllCoursesQuery,useAddCourseMutation
}=courseManagementApi;