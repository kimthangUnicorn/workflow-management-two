import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';
import logo from '../../../../assets/logo.png';
Footer.propTypes = {};

function Footer(props) {
  return (
    <div>
      <footer>
        <div className="footer flex container">
          <div>
            <img src={logo} alt="" />
            <p>Công ty TNHH công nghệ WorkFlow Việt Nam</p>
            <p>
              <span className="font-semibold">Trụ sở chính:</span> 120 Hoàng Minh Thảo, P. Hòa Khánh Nam, Q. Liên
              Chiểu,TP. Đà Nẵng
            </p>
            <p>
              <span className="font-semibold">Chi nhánh Miền Nam:</span> Tầng 6, Tòa A, Số 140 B, Phường 2, Quận Tân
              Bình, Tp. Hồ Chí Minh
            </p>
          </div>
          <div>
            <p className="font-semibold" style={{ color: '#1abc9c' }}>
              Liên kết hữu ích
            </p>
            <p>Giới thiệu về WorkFlow</p>
            <p>Thoả thuận sử dụng</p>
            <p>Chính sách bảo hành</p>
            <p>Chính sách bảo mật thông tin</p>
            <p>Chương trình đối tác</p>
            <p>Tuyển dụng nhân sự</p>
            <p>Trung tâm hỗ trợ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
