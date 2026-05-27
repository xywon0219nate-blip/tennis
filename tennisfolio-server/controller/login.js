import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as repository from "../repository/login.js";

export const getLogin = async (req, res, next) => {
	const { id, pwd } = req.body;

	try {
		// ✅ 수정됨: pwdHash 조회를 try 블록 안으로 이동
		const pwdHash = await repository.getPassword(id);

		if (!pwdHash) {
			// ✅ 수정됨: 사용자 없음을 명확히 응답
			return res.json({
				isLogin: false,
				message: "사용자를 찾을 수 없습니다.",
			});
		}

		// ✅ 수정됨: 비밀번호 비교
		const isLogin = await bcrypt.compare(pwd, pwdHash.pwd);
		let token = "";

		if (isLogin) {
			// ✅ 로그인 성공 - JWT 토큰 생성
			token = await jwt.sign({ id }, "secret", { expiresIn: "7d" });
		}

		// ✅ 수정됨: 결과 반환 (비밀번호 틀려도 응답)
		res.json({
			isLogin,
			token,
			role: pwdHash.role,
			message: isLogin ? "" : "비밀번호가 일치하지 않습니다.",
		});
	} catch (error) {
		// ✅ 수정됨: 에러 처리 추가
		console.error("로그인 에러:", error);
		res.status(500).json({
			isLogin: false,
			message: "서버 오류가 발생했습니다.",
			error: error.message,
		});
	}
};
