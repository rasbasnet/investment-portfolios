import React, { useContext } from "react";
import "./App.css";
import BasePage from "./frontend/basePage/BasePage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./frontend/loginPage/LoginPage";
import { AuthContext } from "./frontend/AuthenticatorProvider";

const PrivateRoute = ({ component: Component, authenticated }: any) =>
	authenticated === true ? (
		Component
	) : (
		<Navigate to="/login" replace={true} />
	);

const PublicRoute = ({ component: Component, authenticated }: any) =>
	authenticated === false ? Component : <Navigate to="/" replace={true} />;
const App = () => {
	const { authenticated } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="*"
					element={
						authenticated ? (
							<Navigate to="/customers" replace={true} />
						) : (
							<Navigate to="/login" replace={true} />
						)
					}
				></Route>
				<Route
					path="/customers"
					element={
						<PrivateRoute
							authenticated={authenticated}
							path="/customers"
							component={<BasePage />}
						/>
					}
				></Route>
				<Route
					path="/login"
					element={
						<PublicRoute
							authenticated={authenticated}
							path="/login"
							component={<LoginPage />}
						/>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
