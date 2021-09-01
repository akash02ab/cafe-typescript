import { FC } from "react";
import { IcafeProps } from "./Cafes";

interface props {
	cafe: IcafeProps;
}

const Cafe: FC<props> = ({ cafe }) => {
	return (
		<div className="cafe">
			<h3>{cafe?.cafeName}</h3>
			<p>{`${cafe?.city} ${cafe?.pincode}`}</p>
			{cafe?.isOfferValid ? <p>Serves less than 5 drinks</p> : <p>Does not serve less than 5 drinks</p>}
		</div>
	);
};

export default Cafe;
