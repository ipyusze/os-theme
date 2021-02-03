import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    shop: state.shop.session,
    settings: state.shop.settings,
    i18n: state.i18n
});


function Footer(props) {

    // get shop
    let {shop, settings} = props;
    // get i18n settings
    let {__} = props.i18n;

    // preset settings
    let footerSettings = ((settings || {}).layout || {}).footer || {
        display: {
            blog: true,
            shop: true,
            user: true
        }
    };

    return <div className="footer">
        <div className="cols">
            <div className="col shop">
                <div className="shop-title">
                    {shop.name}
                </div>
                <div className="shop-desc">
                    {shop.description}
                </div>
            </div>
            <div className="col links">
                <Link to="/">
                    {__("Home")}
                </Link>
                {
                    footerSettings && (footerSettings.display || {}).blog === true ?
                        <Link to="/blogs">
                            {__("Blog")}
                        </Link>
                        : null
                }
                {
                    footerSettings && (footerSettings.display || {}).shop === true ?
                        <Link to="/products">
                            {__("Shop")}
                        </Link>
                        : null
                }
                {
                    footerSettings && (footerSettings.display || {}).cart === true ?
                        <Link to="/cart">
                            {__("Cart")}
                        </Link>
                        : null
                }
                {
                    footerSettings && (footerSettings.display || {}).user === true ?
                        <Link to="/users">
                            {__("My Account")}
                        </Link>
                        : null
                }
            </div>
            <div className="col links">
                <Link to="/pages/terms_and_conditions">
                    {__("Terms and Conditions")}
                </Link>
                <Link to="/pages/privacy_policy">
                    {__("Privacy Policy")}
                </Link>
                <Link to="/pages/shipping_policy">
                    {__("Shipping Policy")}
                </Link>
            </div>
            <div className="col links social">
                {(() => {
                    const fontawesomeMap = {
                        facebook: "fab fa-facebook",
                        instagram: "fab fa-instagram",
                        twitter: "fab fa-twitter",
                        youtube: "fab fa-youtube",
                        pinterest: "fab fa-pinterest"
                    };
                    const socialLinks = ((settings || {}).links || {}).social || {};
                    return Object.keys(socialLinks)
                        .filter(s => socialLinks[s])
                        .map(s => (
                            <a key={`footer-social-link-${s}`} href={socialLinks[s]} target="_blank">
                                <i className={fontawesomeMap[s]}></i>
                            </a>
                        ));
                })()}
            </div>
        </div>
        <div className="copyright">
            <div>Copyright@{new Date().getFullYear()} {shop.name}.</div>
            <div className="powered-by">
                <a href="https://oneshop.cloud">
                    <img src="/assets/images/oneshop_logo.png"/> Powered by Oneshop.
                </a>
            </div>
        </div>
    </div>

}

export default connect(mapStateToProps)(Footer);