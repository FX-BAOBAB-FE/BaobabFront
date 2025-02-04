import "./LoginFinal.css"

export default function LoginFinal(){
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
            />
            <button className="login-button continue-button">계속</button>
            <footer className="footer">
              <p>바오밥 | 제품 | 회사</p>
            </footer>
          </div>
        </div>
    )
}