import { Fragment } from "react";
import { Link } from "react-router-dom";

const RemittanceList = (props) => {
  return (
    <>
      {
        props.foreign.map((el, idx) => (
          <Fragment key={idx}>
            {el.company.map((list, i) => (
              <Fragment key={i}>
                <Link>
                  <div className="logo-wrap">
                    <h4
                      className={`logo ${list.name}`}
                      aria-label={list.name}
                    ></h4>
                  </div>
                  <dl className="rate-wrap">
                    <div>
                      <dt>받는 금액</dt>
                      <dd className="rate">{list.rate}</dd>
                    </div>
                    <div>
                      <dt>송금 수수료</dt>
                      <dd className="charge">{list.charge}</dd>
                    </div>
                    <div>
                      <dt>송금 환율</dt>
                      <dd className="nowExchange">
                        {props.nowData.krw} KRW = {props.nowData.usd} USD
                      </dd>
                    </div>
                  </dl>
                </Link>
              </Fragment>
            ))}
          </Fragment>
        ))
        // .company.map((el) => (
        //   <>
        //     <div className="logo-wrap">
        //       <h4 className={`logo ${el.name}`} aria-label={el.name}></h4>
        //     </div>
        //     <dl className="rate-wrap">
        //       <div>
        //         <dt>받는 금액</dt>
        //         <dd className="rate">{el.rate}</dd>
        //       </div>
        //       <div>
        //         <dt></dt>
        //         <dd className="charge"></dd>
        //       </div>
        //       <div>
        //         <dt></dt>
        //         <dd className="nowExchange"></dd>
        //       </div>
        //     </dl>
        //   </>
        // ))}
      }
    </>
  );
};

export default RemittanceList;
