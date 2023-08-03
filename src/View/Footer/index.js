import '../Footer/FooterStyle.scss';
import logoheader from '../../assets/img/logoheader.png';
function Footer() {
    return (
        <div className="footer-container">
            <div className="inmain">
                <div className="foorter-item">
                    <p>Địa chỉ: 170 An Duong Vuong - Quy Nhơn</p>
                    <p>Số điện thoại: 0123456789</p>
                    <p>Email: nguyenvana@gmail.com</p>
                </div>
                <div className="foorter-item-2">
                    <h3>Gốm sứ chất lượng cao</h3>
                    <p>Quy trình sản xuất đạt tiêu chuẩn</p>
                    <h3>Mua hàng(T2-CN)</h3>
                    <p>Mở cửa tất cả các ngày trong tuần!</p>
                    <h3>Miễn phí giao hàng</h3>
                    <p>Dành cho hóa đơn trên 300k và &lt; 4km</p>
                </div>
                <img src="https://duchl02.github.io/assets/results/webbanhang/src/assets/img/logoheader.png"></img>
            </div>
            <p>Logo Copyright 2022 © tvtoi - Design & code by tvtoi</p>
        </div>
    );
}
export default Footer;
