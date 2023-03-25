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
		<Navigate to="/investment-profiles/login" replace={true} />
	);

const PublicRoute = ({ component: Component, authenticated }: any) =>
	authenticated === false ? (
		Component
	) : (
		<Navigate to="/investment-profiles" replace={true} />
	);
const App = () => {
	const { authenticated } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/investment-profiles*"
					element={
						authenticated ? (
							<Navigate
								to="/investment-profiles/customers"
								replace={true}
							/>
						) : (
							<Navigate
								to="/investment-profiles/login"
								replace={true}
							/>
						)
					}
				></Route>
				<Route
					path="/investment-profiles/customers"
					element={
						<PrivateRoute
							authenticated={authenticated}
							path="/investment-profiles/customers"
							component={<BasePage />}
						/>
					}
				></Route>
				<Route
					path="/investment-profiles/login"
					element={
						<PublicRoute
							authenticated={authenticated}
							path="/investment-profiles/login"
							component={<LoginPage />}
						/>
					}
				></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
