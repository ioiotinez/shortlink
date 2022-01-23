import { Link } from "../../model/link";

export default function handler(req, res) {
	res.status(200).json({ name: "John Doe" });
}

// Save data to firebase realtime database
const saveData = (data) => {
	const ref = firebase.database().ref("links");
	ref.push(data);

	const link = new Link(data.id, data.url, data.description, data.createdAt);
};
