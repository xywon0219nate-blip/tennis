import axios from "axios";

export const axiosData = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

export const axiosGet = async (path) => {
	const url = `http://localhost:9000${path}`; //params
	const res = await axios.get(url);
	return res.data;
};

export const axiosPost = async (path, data) => {
	const url = `http://localhost:9000${path}`; //body
	const res = await axios.post(url, data);
	return res.data;
};

export const axiosPut = async (path, data) => {
	const url = `http://localhost:9000${path}`; //body
	const res = await axios.put(url, data);
	return res.data;
};

export const axiosDelete = async (path, data) => {
	const url = `http://localhost:9000${path}`; //url

	//get, delete -> config 객체에 담아서 전송
	//✨data 속성으로 전달 시 body로 전송
	const res = await axios.delete(url, { data: data });
	return res.data;
};
