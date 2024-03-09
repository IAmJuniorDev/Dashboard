import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../contexts/dashboardThemeContext";
import { Provider } from "react-redux";
import "../style/dashboard.css";
import { setupListeners } from "@reduxjs/toolkit/query";
import DashboardLayout from "components/dashboard/dashboardLayout";
import {api} from '../utils/dashboard/api'; 

const Dashboard = () => {
  const store = configureStore({
    reducer: {
      global: globalReducer,
      [api.reducerPath]:api.reducer,
    },
    middleware:(getDefault)=>getDefault().concat(api.middleware),
  });
  setupListeners(store.dispatch);
  return (
    <Provider store={store}>
      <DashboardLayout />
    </Provider>
  );
};

export default Dashboard;
