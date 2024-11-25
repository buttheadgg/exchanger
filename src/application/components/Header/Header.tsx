import React, { useCallback, useEffect, useRef } from 'react';
import styles from "./Header.module.scss";
import { PUBLIC_IMAGE } from '../../constants';


const Header = () => {
  
  const mainLogoPath = PUBLIC_IMAGE+'main-logo.svg';

  const burgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(() => {
    burgerRef.current?.classList.toggle('active');
    menuRef.current?.classList.toggle('open');
    document.body.classList.toggle('active');
  }, []);

  useEffect(() => {
    if (burgerRef.current && menuRef.current) {
      burgerRef.current.addEventListener('click', handleClick);
      return () => {
        burgerRef.current?.removeEventListener('click', handleClick);
      };
    }
  }, [handleClick]);

    return (
        <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header__inner}>
            <img src={mainLogoPath} alt='mainImage'/>
            <nav className={styles.menu}>
              <div className={styles.burger} ref={burgerRef}>
                <span></span>
              </div>
              <div className={styles.menu__listHeader} ref={menuRef}>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Exchanger</a>
                </li>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Debit cards</a>
                </li>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Bots</a>
                </li>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Pools</a>
                </li>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Credits</a>
                </li>
                <li className={styles.menu__listItem}>
                  <a className={styles.menu__listLink}>Sheepy
                    <div className={`${styles.menu__dropdownContent} ${styles.dropdown__sheepy}`}>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="./Company.html">
                            <div className={styles.menu__dropdownTitle}>About us/Company</div>
                            <div className={styles.menu__dropdownText}>Road map.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt=""/>
                          <a href="#">
                            <div className={styles.menu__dropdownTitle}>Business</div>
                            <div className={styles.menu__dropdownText}>Accept major cryptocurrencies, manage fiat <br></br> converson, keep or request payouts.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="./Fundraising.html">
                            <div className={styles.menu__dropdownTitle}>Fundraising</div>
                            <div className={styles.menu__dropdownText}>Accept major cryptocurrencies, manage fiat <br></br> converson, keep or request payouts.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="./Merchant.html">
                            <div className={styles.menu__dropdownTitle}>Merchant</div>
                            <div className={styles.menu__dropdownText}>Send payments to multiple recipients <br></br> simultaneously.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="#">
                            <div className={styles.menu__dropdownTitle}>Demo</div>
                            <div className={styles.menu__dropdownText}>Send payments to multiple recipients <br></br> simultaneously.</div>
                          </a>
                        </div>
                    </div>
                  </a>
                  <img src="./image/Header-arrowImageDown.svg" alt="" className={styles.menu__itemArrow}/>
                </li>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Company
                    <div className={`${styles.menu__dropdownContent} ${styles.dropdown__company}`}>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt=""/>
                          <a href="#">
                            <div className={styles.menu__dropdownTitle}>About us/Company</div>
                            <div className={styles.menu__dropdownText}>Road map.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="#">
                            <div className={styles.menu__dropdownTitle}>Road map</div>
                            <div className={styles.menu__dropdownText}>Accept major cryptocurrencies, manage fiat <br></br> converson, keep or request payouts.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="#">
                            <div className={styles.menu__dropdownTitle}>White papper</div>
                            <div className={styles.menu__dropdownText}>Accept major cryptocurrencies, manage fiat <br></br> converson, keep or request payouts.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="#">
                            <div className={styles.menu__dropdownTitle}>Vacancies</div>
                            <div className={styles.menu__dropdownText}>Send payments to multiple recipients <br></br> simultaneously.</div>
                          </a>
                        </div>
                        <div className={styles.menu__dropdownWrapper}>
                          <img src="./image/dropdown-iconImage.svg" alt="" />
                          <a href="#">
                            <div className={styles.menu__dropdownTitle}>FAQ</div>
                            <div className={styles.menu__dropdownText}>Send payments to multiple recipients <br></br> simultaneously.</div>
                          </a>
                        </div>
                    </div>
                  </a>
                  <img src="./image/Header-arrowImageDown.svg" alt="" />
                </li>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Tokens</a>
                </li>
                <li className={styles.menu__listItem}>
                  <a href="#" className={styles.menu__listLink}>Account</a>
                </li>
              </div>
              <li className={`${styles.menu__listItem} ${styles.En}`} >
                <a href="#" className={styles.menu__listLink}>En</a>
              </li>
            </nav>
          </div>
        </div>
      </header>
    );
};

export default Header;