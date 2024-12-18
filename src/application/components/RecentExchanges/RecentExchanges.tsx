import React from 'react';
import styles from './RecentExchanges.module.scss'
import { PUBLIC_IMAGE } from '../../constants';
import { observer } from 'mobx-react-lite';
import formStore from '../../stores/formStore';

const RecentExchanges = observer(() => {
    return (
        <div className={`${formStore.dataValid ? styles.recentExchanges__wrapperNone : styles.recentExchanges__wrapper}`}>
          <div className={styles.recentExchangesText}>
            Recent exchanges of our customers
          </div>
          <div className={styles.recentExchanges__box}>
            <div className={styles.recentExchanges__headerStat}>
              <div className={styles.headerStat__countVolume}>
                <div className={styles.headerStat__count}>
                  <div className={styles.headerStat__leftData}>
                    <div className={styles.headerStat__name}>Count</div>
                    <div className={styles.headerStat__totalValue}>
                      8,591,138,816
                    </div>
                    <div className={styles.headerStat__total}>Total</div>
                  </div>
                  <div className={styles.headerStat__rightData}>
                    <div className={styles.headerStat__more}>More</div>
                    <div className={styles.headerStat__yesterdayValue}>
                      +6,591,138,816
                    </div>
                    <div className={styles.headerStat__yesterday}>
                      Yesterday
                    </div>
                  </div>
                </div>
                <div className={styles.headerStat__volume}>
                  <div className={styles.headerStat__leftData}>
                    <div className={styles.headerStat__name}>
                      Trading Volume
                    </div>
                    <div className={styles.headerStat__totalValue}>
                      8,591,138,816
                    </div>
                    <div className={styles.headerStat__total}>Total</div>
                  </div>
                  <div className={styles.headerStat__rightData}>
                    <div className={styles.headerStat__more}>More</div>
                    <div className={styles.headerStat__yesterdayValue}>
                      +6,591,138,816
                    </div>
                    <div className={styles.headerStat__yesterday}>
                      Yesterday
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.headerStat__dailyDistribution}>
                <img
                  src={PUBLIC_IMAGE + "RecentExchangeImg.svg"}
                  className={styles.headerStat__dailyDistributionImg}
                />
              </div>
            </div>
            <div className={styles.recentExchanges__sortLine}>
              <div className={styles.sortLine__pay}>Pay</div>
              <div className={styles.sortLine__receive}>Receive</div>
              <div className={styles.sortLine__txHash}>Tx Hash</div>
              <div className={styles.sortLine__date}>Date</div>
            </div>
            <div className={styles.recentExchanges__dataInformationWrapper}>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
              <div className={styles.recentExchanges__dataInformation}>
                <div className={styles.dataInformation__wrapper}>
                  <div className={styles.dataInformation__img}>
                    <img src={PUBLIC_IMAGE + "dataInformationEU.svg"} />
                  </div>
                  <div className={styles.dataInformation__name}>Euro</div>
                  <div className={styles.dataInformation__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__arrow}>
                    <img src={PUBLIC_IMAGE + "dataInformationArrow.svg"} />
                  </div>
                <div className={styles.dataInformation__cryptoWrapper}>
                  <div>
                    <img src={PUBLIC_IMAGE + "ETHEthereum.svg"} />
                  </div>
                  <div className={styles.cryptoWrapper__cryptoNameWrapepr}>
                    <div className={styles.cryptoWrapper__cryptoName}>ETH</div>
                    <div className={styles.cryptoWrapper__cryptoSecName}>
                      Ethereum
                    </div>
                  </div>
                  <div className={styles.cryptoWrapper__value}>0,3044816</div>
                </div>
                <div className={styles.dataInformation__txHashWrapper}>
                  <div className={styles.txHashWrapper__value}>
                    7c8297c8...c7c34c7c
                  </div>
                  <div className={styles.xHashWrapper__image}>
                    {" "}
                    <img src={PUBLIC_IMAGE + "copy.svg"} />{" "}
                  </div>
                </div>
                <div className={styles.dataInformation__time}>1 second ago</div>
              </div>
            </div>
            <div className={styles.recentExchanges__steps}>
                <div className={styles.steps__arrowLeft}>
                    <img src={PUBLIC_IMAGE+'arrowLeft.svg'}/>
                </div>
                <div className={styles.steps__itemsWrapper}>
                <div className={`${styles.steps__item} ${styles.steps__select}`}>1</div>
                <div className={styles.steps__item}>...</div>
                <div className={styles.steps__item}>3</div>
                <div className={styles.steps__item}>4</div>
                <div className={styles.steps__item}>5</div>
                <div className={styles.steps__item}>...</div>
                <div className={styles.steps__item}>11</div>
                </div>
                <div className={styles.steps__arrowRight}>
                    <img src={PUBLIC_IMAGE+'arrowright.svg'}/>
                </div>
            </div>
          </div>
        </div>
    );
});

export default RecentExchanges;