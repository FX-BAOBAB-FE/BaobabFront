import React, {useState} from "react"
import "./LoginFinal.css"

export default function LoginFinal(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email);
  }

  const handleEmailChange = (e: any) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if(validateEmail(inputEmail)) {
      setError('');
      setIsEmailValid(true);
    } else {
      setError("이메일을 정확하게 입력해 주세요");
      setIsEmailValid(false);
    }
  }

  const handleSubmit = () => {
    if(!validateEmail(email)) {
      setError("이메일을 정확하게 입력해 주세요")
      return;
    }

    setError("");
    console.log("Email:", email);
    console.log("Password:", password);
  }

    return(
        <div className="login-container">
          <div className="login-box">
            <div className="logo-container">
              <img
                //src=
                alt="Baobab"
                className="logo"
              />
            </div>
            <h2 className="login-title">로그인 또는 가입</h2>
            <button className="login-button kakao-button">
              카카오 계정으로 계속하기
            </button>
            <button className="login-button google-button">
              Google 계정으로 계속하기
            </button>
            <div className="divider">또는</div>
            <input
              type="email"
              placeholder="이메일"
              className="email-input"
              value={email}
              onChange={handleEmailChange}
            />
            {error && <p className="error-message">{error}</p>}
            {isEmailValid && (
              <input
                type="password"
                placeholder="비밀번호"
                className="password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            
            <button
              className="login-button continue-button"
              onClick={handleSubmit}
            >
              {isEmailValid ? "로그인" : "계속"}
            </button>
            
            <footer className="footer">
              <p>바오밥 | 제품 | 회사</p>
            </footer>
          </div>
        </div>
    )
}