import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import banner from '../../assets/Banner-WorkFlow.png';
import benefit1 from '../../assets/Benefit/benefit1.png';
import tichhop from '../../assets/Reason/tichhop.png';
import vnpost from '../../assets/Business/vnpost.png';
import us from '../../assets/User/CMC.png';
Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <div className="content">
        <div className="introduce">
          <div className="flex">
            <div className="left text-white">
              <p className="font-bold uppercase">workflow</p>
              <p className="font-bold uppercase">Nền tảng quản trị và điều hành doanh nghiệp toàn diện</p>
              <div className="flex">
                <div>
                  <ul style={{ paddingTop: '20px' }}>
                    <li className="text-20 text-white">
                      <i className="fa-solid fa-circle-check" />
                      Phù hợp với nhiều lĩnh vực
                    </li>
                    <li className="text-20 text-white">
                      <i className="fa-solid fa-circle-check" />
                      Chi phí hợp lý
                    </li>
                    <li className="text-20 text-white">
                      <i className="fa-solid fa-circle-check" />
                      Được 3500+ doanh nghiệp tin dùng
                    </li>
                  </ul>
                  <div>
                    <button className="hv__button">
                      Đăng kí nhận tư vấn
                      <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                        <path
                          clipRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={banner} alt="" />
            </div>
          </div>
        </div>
        {/* Hệ điều hành doanh nghiệp */}
        <div className="benefit">
          <div className="benefit__des">
            <p className="uppercase text-35 font-bold">Hệ điều hành doanh nghiệp tổng thể 4.0</p>
            <p className="text-25 font-semibold">One app - One Platform</p>
          </div>
          <div className="flex all__benefit">
            <div className="my__benefit card__hv">
              <div>
                <img src={benefit1} alt="" />
              </div>
              <div>
                <p className="text-25 font-bold">One SME</p>
              </div>
              <div>
                <p className="uppercase text-15">Bộ giải pháp chuyển đổi số toàn diện cho SME</p>
              </div>
              <div>
                <button className="hv__button">
                  Xem chi tiết
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="my__benefit card__hv">
              <div>
                <img src={benefit1} alt="" />
              </div>
              <div>
                <p className="text-25 font-bold">One SME</p>
              </div>
              <div>
                <p className="uppercase text-15">Bộ giải pháp chuyển đổi số toàn diện cho SME</p>
              </div>
              <div>
                <button className="hv__button">
                  Xem chi tiết
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="my__benefit card__hv">
              <div>
                <img src={benefit1} alt="" />
              </div>
              <div>
                <p className="text-25 font-bold">One SME</p>
              </div>
              <div>
                <p className="uppercase text-15">Bộ giải pháp chuyển đổi số toàn diện cho SME</p>
              </div>
              <div>
                <button className="hv__button">
                  Xem chi tiết
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="my__benefit card__hv">
              <div>
                <img src={benefit1} alt="" />
              </div>
              <div>
                <p className="text-25 font-bold">One SME</p>
              </div>
              <div>
                <p className="uppercase text-15">Bộ giải pháp chuyển đổi số toàn diện cho SME</p>
              </div>
              <div>
                <button className="hv__button">
                  Xem chi tiết
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End Benefit */}
        {/* Why us */}
        <div className="why">
          <div className="all__reason">
            <div className="reason__des">
              <p className="uppercase text-35 font-semibold">Tại sao nên</p>
              <p className="text-35 font-bold uppercase">Sử dụng workflow</p>
            </div>
            <div className="flex">
              <div className="w-100 reason_background">
                <div className="my__reason flex">
                  <section id="card1" className="card__reason">
                    <div className="flex" style={{ flexDirection: 'column', padding: '10px 20px' }}>
                      <img src={tichhop} alt="" />
                      <p className="font-bold text-20" style={{ marginTop: '10px' }}>
                        Khả năng tích hợp
                      </p>
                    </div>
                    <div className="card__reason__content">
                      <p className="card__reason__title">Khả năng tích hợp và mở rộng không giới hạn</p>
                      <p className="card__reason__description">
                        WorkFlow API cho phép các nền tảng, hệ thống khác kết nối tới FastWork thông qua FastWork API
                      </p>
                    </div>
                  </section>
                  <section id="card1" className="card__reason">
                    <div className="flex" style={{ flexDirection: 'column', padding: '10px 20px' }}>
                      <img src={tichhop} alt="" />
                      <p className="font-bold text-20" style={{ marginTop: '10px' }}>
                        Khả năng tích hợp
                      </p>
                    </div>
                    <div className="card__reason__content">
                      <p className="card__reason__title">Khả năng tích hợp và mở rộng không giới hạn</p>
                      <p className="card__reason__description">
                        WorkFlow API cho phép các nền tảng, hệ thống khác kết nối tới FastWork thông qua FastWork API
                      </p>
                    </div>
                  </section>
                  <section id="card1" className="card__reason">
                    <div className="flex" style={{ flexDirection: 'column', padding: '10px 20px' }}>
                      <img src={tichhop} alt="" />
                      <p className="font-bold text-20" style={{ marginTop: '10px' }}>
                        Khả năng tích hợp
                      </p>
                    </div>
                    <div className="card__reason__content">
                      <p className="card__reason__title">Khả năng tích hợp và mở rộng không giới hạn</p>
                      <p className="card__reason__description">
                        WorkFlow API cho phép các nền tảng, hệ thống khác kết nối tới FastWork thông qua FastWork API
                      </p>
                    </div>
                  </section>
                  <section id="card1" className="card__reason">
                    <div className="flex" style={{ flexDirection: 'column', padding: '10px 20px' }}>
                      <img src={tichhop} alt="" />
                      <p className="font-bold text-20" style={{ marginTop: '10px' }}>
                        Khả năng tích hợp
                      </p>
                    </div>
                    <div className="card__reason__content">
                      <p className="card__reason__title">Khả năng tích hợp và mở rộng không giới hạn</p>
                      <p className="card__reason__description">
                        WorkFlow API cho phép các nền tảng, hệ thống khác kết nối tới FastWork thông qua FastWork API
                      </p>
                    </div>
                  </section>
                  <section id="card1" className="card__reason">
                    <div className="flex" style={{ flexDirection: 'column', padding: '10px 20px' }}>
                      <img src={tichhop} alt="" />
                      <p className="font-bold text-20" style={{ marginTop: '10px' }}>
                        Khả năng tích hợp
                      </p>
                    </div>
                    <div className="card__reason__content">
                      <p className="card__reason__title">Khả năng tích hợp và mở rộng không giới hạn</p>
                      <p className="card__reason__description">
                        WorkFlow API cho phép các nền tảng, hệ thống khác kết nối tới FastWork thông qua FastWork API
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Why us */}
        {/* Business */}
        <div className="business container flex">
          <div className="number flex">
            <p className="font-bold">Hơn 3500+</p>
            <p className="text-20">
              Doanh nghiệp <span className="font-semibold">Việt Nam</span>
            </p>
            <p className="text-20">
              Thuộc mọi lĩnh vực tin tưởng và sử dụng
              <span className="font-semibold">WorkFlow</span>
            </p>
          </div>
          <div className="all_business flex">
            <div>
              <img src={vnpost} alt="" />
            </div>
            <div>
              <img src={vnpost} alt="" />
            </div>
            <div>
              <img src={vnpost} alt="" />
            </div>
            <div>
              <img src={vnpost} alt="" />
            </div>
            <div>
              <img src={vnpost} alt="" />
            </div>
          </div>
        </div>
        {/* End Business */}
        {/* User Story */}
        <div className="us_main">
          <div className="user__story container flex">
            <div className="us__left">
              <p className="text-30 font-semibold">Câu chuyện khách hàng</p>
              <p className="text-20">
                Những doanh nghiệp đã tin tưởng đồng hành và ứng dụng thành công phần mềm WorkFlow
              </p>
              <div>
                <button className="hv__button">
                  Xem chi tiết
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="us__right flex">
              <div className="user">
                <div className="user__card-container">
                  <div className="user__card">
                    <div className="user__front-content">
                      <img src={us} alt="" />
                      <p>Anh Phạm Thái</p>
                      <p style={{ color: 'rgb(196, 189, 189)' }}>Trưởng phòng HTKT Tập đoàn Viễn thông CMC</p>
                    </div>
                    <div className="content">
                      {/* <p class="heading">Card Hover</p> */}
                      <p>
                        Không chỉ giúp CMC nâng cao chất lượng dịch vụ khách hàng, kiểm soát tốt hiệu suất làm việc của
                        đội ngũ kỹ thuật viên, FastWork còn giúp CMC xây dựng môi trường làm việc mở, tích cực và công
                        nghệ!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user">
                <div className="user__card-container">
                  <div className="user__card">
                    <div className="user__front-content">
                      <img src={us} alt="" />
                      <p>Anh Phạm Thái</p>
                      <p style={{ color: 'rgb(196, 189, 189)' }}>Trưởng phòng HTKT Tập đoàn Viễn thông CMC</p>
                    </div>
                    <div className="content">
                      {/* <p class="heading">Card Hover</p> */}
                      <p>
                        Không chỉ giúp CMC nâng cao chất lượng dịch vụ khách hàng, kiểm soát tốt hiệu suất làm việc của
                        đội ngũ kỹ thuật viên, FastWork còn giúp CMC xây dựng môi trường làm việc mở, tích cực và công
                        nghệ!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="user">
                <div className="user__card-container">
                  <div className="user__card">
                    <div className="user__front-content">
                      <img src={us} alt="" />
                      <p>Anh Phạm Thái</p>
                      <p style={{ color: 'rgb(196, 189, 189)' }}>Trưởng phòng HTKT Tập đoàn Viễn thông CMC</p>
                    </div>
                    <div className="content">
                      {/* <p class="heading">Card Hover</p> */}
                      <p>
                        Không chỉ giúp CMC nâng cao chất lượng dịch vụ khách hàng, kiểm soát tốt hiệu suất làm việc của
                        đội ngũ kỹ thuật viên, FastWork còn giúp CMC xây dựng môi trường làm việc mở, tích cực và công
                        nghệ!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End User Story */}
      </div>
    </div>
  );
}

export default Home;
