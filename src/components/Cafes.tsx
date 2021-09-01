import { FC, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import Cafe from "./Cafe";
import db from "../firebaseConfig";

export interface IcafeProps {
	cafeName: string;
	city: string;
	pincode: string;
	isOfferValid: boolean;
}

type arrOfObj = IcafeProps[];

const Cafes: FC = () => {
	const [cafes, setCafes] = useState<arrOfObj>([]);

	const getAllCafes = async (): Promise<void> => {
		const allCafes: arrOfObj = [];
		const querySnapshot = await getDocs(collection(db, "cafes"));

		querySnapshot.forEach((doc) => {
			allCafes.push(doc.data() as IcafeProps);
		});
		console.log(allCafes);
		setCafes(allCafes);
	};

	useEffect(() => {
		getAllCafes();
	}, []);

	return (
		<div className="cafes">
			<h1>All Cafes</h1>
			{cafes.map((cafe, index) => (
				<Cafe cafe={cafe} key={index} />
			))}
		</div>
	);
};

export default Cafes;
