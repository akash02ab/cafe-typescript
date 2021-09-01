import { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Form from "./Form";
import Cafes from "./Cafes";
import Error from "./Error";
import "../styles/app.css";

const App: FC = () => {
	return (
		<div className="container">
			<Router>
				<Switch>
					<Route exact path="/" component={Form} />
					<Route exact path="/cafes" component={Cafes} />
					<Route path="/404" component={Error} />
					<Redirect to="/404" />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
