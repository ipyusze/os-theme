import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './navBar.css';
import actions from '../../helpers/actions';
import { connect } from 'react-redux';

// ------------------------ REDUX ------------------------
const mapStateToProps = state => ({
    shop     : state.shop.session,
    settings : state.shop.settings,
    cart     : state.cart,
    i18n     : state.i18n
});

const mapDispatchToProps = dispatch => ({
    setLocale : (locale) => dispatch({
        type    : actions.SET_LOCALE,
        payload : locale
    })
});
// ------------------------ /REDUX ------------------------


function NarBar(props){

    // get window href
    let location = useLocation();
    // navBar style override state
    let [hasShadow, setHasShadow] = useState(false);
    // expand status
    let [navBarExpanded, setNavBarExpanded] = useState(false);
    // local menu expanded
    let [localeMenuExpanded, setLocaleMenuExpanded] = useState(false);
    // get shop
    const { shop, cart, settings } = props;
    // get translation helpers
    const { locale, __, locales } = props.i18n;

    // preset settings
    let navBarSettings = ((settings || {}).layout || {}).navBar || {
        display : {
            home: true,
            blog : true,
            shop : true,
            cart: true,
            user : true,
            language: true
        },
        mobileDisplay: {
            home: true,
            blog : true,
            shop : true,
            cart: true,
            user : true,
        }
    };

    // ---------------- LIFECYCLE ----------------
    useEffect(() => {
        // scroll listener
        window.onscroll = function() {
            setHasShadow(window.pageYOffset > 69);
        };
        // remove listener
        return () => { window.onscroll = null; };
    }, []);
    // ---------------- /LIFECYCLE ----------------

    return (
        <div className="navBar" style={{ 
            boxShadow : hasShadow ? "0px 1px 8px #dddddd" : "none",
            border : "0.5px solid #dddddd"
        }}>

            {/* ------------------ Desktop Nav Bar -----------------*/}
            <div className="navBar-wrapper">
                <div className="navBar-item title">
                    <Link to='/'>
                        {shop.logo.length > 0 ? <img className="logo" src={shop.logo} /> : null}
                    </Link>
                </div>
                {
                    navBarSettings && (navBarSettings.display || {}).home === true ?
                        <div className="navBar-item">
                            <Link to='/' style={{fontWeight: location.pathname === "/" ? 500 : 300}}>
                                {__("Home")}
                            </Link>
                        </div> : null
                }
                {
                    navBarSettings && (navBarSettings.display || {}).blog === true ?
                    <div className="navBar-item">
                        <Link to='/blogs' style={{fontWeight:location.pathname.startsWith("/blogs") ? 500 : 300}}>
                            {__("Blog")}
                        </Link>
                    </div> : null
                }
                {
                    navBarSettings && (navBarSettings.display || {}).shop === true ?
                    <div className="navBar-item">
                        <Link to='/products' style={{fontWeight:location.pathname.startsWith("/products") ? 500 : 300}}>
                            {__("Shop")}
                        </Link>
                    </div> : null
                }
                {
                    navBarSettings && (navBarSettings.display || {}).language === true ?
                        <div className="navBar-item">
                            <button onClick={() => setLocaleMenuExpanded(!localeMenuExpanded)}>
                                <i className="fas fa-globe-asia"></i>
                            </button>
                            <div className={`locale-menu ${localeMenuExpanded ? "expanded" : ""}`}>
                                {locales.map(l => (
                                    <button key={`lang-${l.code}`} className="locale-btn" onClick={() => {
                                        // set locale
                                        props.setLocale(l.code);
                                        // close menu
                                        setLocaleMenuExpanded(false);
                                    }}>
                                        {locale == l.code ? <b>{l.name}</b> : l.name}
                                    </button>
                                ))}
                            </div>
                        </div> : null
                }
                {
                    navBarSettings && (navBarSettings.display || {}).cart === true ?
                    <div className="navBar-item">
                        <Link to='/cart'>
                            {
                                cart.items.length > 0 ?
                                <span className="count">
                                    {cart.items.reduce((count, item) => count + parseInt(item.qty), 0)}
                                </span> : null
                            }
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </div> : null
                }
                {
                    navBarSettings && (navBarSettings.display || {}).user === true ?
                    <div className="navBar-item">
                        <Link to='/users'>
                            <i className="fas fa-user"></i>
                        </Link>
                    </div> : null
                }
            </div>
            {/* ------------------ /Desktop Nav Bar -----------------*/}


            {/* ------------------ Mobile Nav Bar -----------------*/}
            <div className="navBar-wrapper-mobile">
                <div className="top-body">
                    <button className="expand-btn" onClick={() => setNavBarExpanded(!navBarExpanded)}>
                        {navBarExpanded ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                    </button>
                    <div className="navBar-item title">
                        {shop.logo.length > 0 ? <img className="logo" src={shop.logo} /> : null}
                    </div>
                    {
                        navBarSettings && (navBarSettings.mobileDisplay || {}).cart === true ?
                            <div className="fast-link">
                                <Link to='/cart' onClick={() => setNavBarExpanded(false)}>
                                    {
                                        cart.items.length > 0 ?
                                            <span className="count">
                                    {cart.items.reduce((count, item) => count + parseInt(item.qty), 0)}
                                </span> : null
                                    }
                                    <i className="fas fa-shopping-cart"></i>
                                </Link>
                            </div> : null
                    }
                    {
                        navBarSettings && (navBarSettings.mobileDisplay || {}).user === true ?
                            <div className="fast-link">
                                <Link to='/users' onClick={() => setNavBarExpanded(false)}>
                                    <i className="fas fa-user"></i>
                                </Link>
                            </div> : null
                    }
                </div>
                {/* ------------ Expandable list ------------ */}
                <div className={`navBar-item-list ${navBarExpanded ? "expand" : ""}`}>
                    {
                        navBarSettings && (navBarSettings.mobileDisplay || {}).home === true ?
                            <div className="navBar-item">
                                <Link to='/' style={{fontWeight: location.pathname === "/" ? 500 : 300}}
                                      onClick={() => setNavBarExpanded(false)}>
                                    {__("Home")}
                                </Link>
                            </div> : null
                    }
                    {
                        navBarSettings && (navBarSettings.mobileDisplay || {}).blog === true ?
                            <div className="navBar-item">
                                <Link to='/blogs'
                                      style={{fontWeight: location.pathname.startsWith("/blogs") ? 500 : 300}}
                                      onClick={() => setNavBarExpanded(false)}>
                                    {__("Blog")}
                                </Link>
                            </div> : null
                    }
                    {
                        navBarSettings && (navBarSettings.mobileDisplay || {}).shop === true ?
                            <div className="navBar-item">
                                <Link to='/products'
                                      style={{fontWeight: location.pathname.startsWith("/products") ? 500 : 300}}
                                      onClick={() => setNavBarExpanded(false)}>
                                    {__("Shop")}
                                </Link>
                            </div> : null
                    }
                </div>
                {/* ------------ Expandable list ------------ */}
            </div>
            {/* ------------------/ Mobile Nav Bar -----------------*/}

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(NarBar);