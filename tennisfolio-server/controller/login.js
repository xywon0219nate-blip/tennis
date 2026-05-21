import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// import * as repository from "../repository/login.js";

export const getLogin = async (req, res, next) => {
	const { id, pwd } = req.body;
	console.log(` 로그인 시도: 아이디=${id}, 비밀번호=${pwd}`);

	console.log(`로그인 요청 - 입력된 아이디: ${id}, 비밀번호: ${pwd}`);

	const token = "temporary_fake_token_12345";

	return res.json({
		isLogin: true,
		token: token,
		role: "user",
	});
};
