import '../Contact/ContactStyle.scss';

const Contact = () => {
    document.title = 'Liên hệ - Gốm nhà Khuê My';
    window.scrollTo({ top: 0 });

    return (
        <div className="contact-container">
            <div className="contact-bar">
                <h1>LIÊN HỆ</h1>
                <h3>Chăm sóc khách hàng là niềm vui của chúng tôi!</h3>
            </div>
            <div className="contact-address wide grid">
                <div className="contact-item-1 boder-db">
                    <h2>Cửa hàng 1</h2>
                    <p>Địa chỉ: 170 An Duong Vuong - Quy nhơn</p>
                    <p>Số điện thoại: 0123456789</p>
                    <p>Email: nguyenvana@gmail.com</p>
                </div>
                <div className="contact-item-2 boder-db">
                    <h2>Cửa hàng 2</h2>
                    <p>Địa chỉ: 170 An Duong Vuong - Quy nhơn</p>
                    <p>Số điện thoại: 0123456789</p>
                    <p>Email: nguyenvana@gmail.com</p>
                </div>
            </div>
        </div>
    );
};
export default Contact;
