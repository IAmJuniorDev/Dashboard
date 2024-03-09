import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "Sales",
    "User",
    "Products",
    "Customers",
    "Transactions",
    "Geography",
    "Admins",
    "Performance",
    "Dashboard"
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `/api/portfolio/dashboard/user/${id}`,
      providersTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "/api/portfolio/dashboard/products",
      providersTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "/api/portfolio/dashboard/customers",
      providersTags: ["Customers"],
    }),
    getTransactions: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/api/portfolio/dashboard/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providersTags: ["Transactions"],
    }),
    getGeography: build.query({
      query: () => "/api/portfolio/dashboard/geography",
      providersTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "/api/portfolio/dashboard/sales",
      providersTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "/api/portfolio/dashboard/admins",
      providersTags: ["Admins"],
    }),
    getUserPerformance: build.query({
      query: (id) => `/api/portfolio/dashboard/performance/${id}`,
      providersTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => "/api/portfolio/dashboard/main",
      providersTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
