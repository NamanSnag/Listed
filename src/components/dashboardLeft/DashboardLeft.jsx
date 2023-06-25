import boarditems from "./data";

import "./style.scss";

const DashboardLeft = () => {
  return (
    <div className="dash__left flex">
      <div className="dashl__top">
        <h1 className="dashl__head">Board.</h1>

        <ul className="dashl__list">
          {boarditems.map((item) => {
            return (
              <li key={item.id} className="dashl__item">
                <img src={item.icon} alt="icon" />
                <p style={item.active && {fontWeight: '700'}}>{item.title}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="dashl__bottom">
        <p>Help</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
};

export default DashboardLeft;
