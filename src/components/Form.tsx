import { useState, useRef, FC } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useHistory } from "react-router-dom";
import db from "../firebaseConfig";

const Form: FC = () => {
	const city = useRef<HTMLInputElement>(null);
	const pincode = useRef<HTMLInputElement>(null);
	const cafeName = useRef<HTMLInputElement>(null);

	const [isOfferValid, setIsOfferValid] = useState<boolean>(true);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const history = useHistory();

	const submithandler = async (): Promise<void> => {
		const regex = /^[0-9]{6}$/g;

		if (cafeName?.current?.value === "") {
			setError("Cafe Name can't be empty.");
			return;
		} else if (city?.current?.value === "") {
			setError("City can't be empty.");
			return;
		} else if (pincode?.current?.value === "") {
			setError("Pincode can't be empty.");
			return;
		} else if (!pincode?.current?.value.match(regex)) {
			setError("Picode must be a 6 digit number.");
			return;
		}

		if (cafeName.current && city.current && pincode.current) {
			try {
				setLoading(true);

				const docRef = await addDoc(collection(db, "cafes"), {
					cafeName: cafeName.current.value,
					city: city.current.value,
					pincode: pincode.current.value,
					isOfferValid: isOfferValid,
				});
				console.log("Document written with ID: ", docRef.id);

				setError(null);
				setLoading(false);
			} catch (e) {
				setError("Error adding document.");
			}

			cafeName.current.value = "";
			city.current.value = "";
			pincode.current.value = "";
			history.push("/cafes");
		}
	};

	return (
		<div className="form">
			<h2>Add Your Cafe</h2>

			<fieldset>
				<label htmlFor="cafe-name">Cafe Name:</label>
				<input type="text" name="cafe-name" placeholder="Madras Cafe" ref={cafeName} required />
			</fieldset>

			<fieldset>
				<label htmlFor="city">City:</label>
				<input type="text" name="city" placeholder="Bombay" ref={city} required />
			</fieldset>

			<fieldset>
				<label htmlFor="pincode">Pincode:</label>
				<input type="text" name="pincode" placeholder="400001" ref={pincode} required />
			</fieldset>

			<fieldset className="offers">
				<label>Offer less than 5 drinks: </label>
				<input type="radio" name="offer" checked onClick={() => setIsOfferValid(true)} />
				<p>Yes</p>
				<input type="radio" name="offer" onClick={() => setIsOfferValid(false)} />
				<p>No</p>
			</fieldset>

			{error ? <p className="error">{error}</p> : null}

			<button disabled={loading} onClick={submithandler} className={loading ? "disabled" : ""}>
				Submit
			</button>
		</div>
	);
};

export default Form;
