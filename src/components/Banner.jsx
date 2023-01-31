const Banner = (props) => {
  const { user } = props;
  return (
    <>
      {user === "" ? (
        <>
          <div className="login-nav-container">
            <div className="text">
              Đăng nhập để khám phá playlist dành riêng cho bạn
            </div>
            <button className="zm-btn ">
              <span>Đăng nhập</span>
            </button>
          </div>
          <div className="vip-banner-sidebar">
            <div className="text">
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </div>
            <a href="dfdfd" className="zm-btn">
              Nâng cấp VIP
            </a>
          </div>
        </>
      ) : (
        <div className="vip-banner-sidebar">
          <div className="text">
            Nghe nhạc không quảng cáo cùng kho nhạc VIP
          </div>
          <a href="dfdfd" className="zm-btn">
            Nâng cấp VIP
          </a>
        </div>
      )}
    </>
  );
};

export default Banner;
