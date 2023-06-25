import {
  DashboardLeft,
  DashNav,
  ActivityChart,
  PieChart,
} from "../../components";
import { icons } from "../../assest";
import { total, schedule } from "./data";

import "./style.scss";

const Dashboard = () => {
  return (
    <div className="dash">
      <DashboardLeft />
      <div className="dash__right">
        <DashNav />

        <div className="dasht__wrapper">
          {total.map((item) => (
            <div
              key={item.id}
              style={{ backgroundColor: `${item.bg_color}` }}
              className="dasht__container"
            >
              <p className="dasht__head">{item.title}</p>
              <h3>{item.value}</h3>
              <img src={item.icon} alt="icons" />
            </div>
          ))}
        </div>

        {/* activities graph */}
        <div className="dasht__chart flex">
          <div className="chart__head">
            <div className="chart__ac">
              <h4>Activities</h4>
              <div className="date">
                <p>May - June 2021</p>
                <img src={icons.downar} />
              </div>
            </div>

            <div className="chart__right">
              <div className="chart__head" id="guest">
                Guest
              </div>
              <div className="chart__head" id="user">
                User
              </div>
            </div>
          </div>

            <div className="chart__activity">
            <ActivityChart />
            </div>
        </div>
        {/* End activity chart */}

        {/* pie graph and schedule */}
        <div className="dasht__detail">
          <div className="pie__chart">
            <div className="pie__head">
              <h4>Top products</h4>
              <div className="date">
                <p>May - June 2021</p>
                <img src={icons.downar} />
              </div>
            </div>
            <div className="pie__d">
            <PieChart />
            </div>
          </div>

          <div className="pie__chart">
            <div className="pie__head">
              <h4>Today’s schedule</h4>
              <div className="date">
                <p>Sell All</p>
                <img src={icons.rightarrow} />
              </div>
            </div>

            <div className="dash__meet">
              {schedule.map((item) => (
                <div
                  key={item.id}
                  style={{ borderLeft: `0.3125rem solid ${item.mg_color}`}}
                  className="dash__meet__container"
                >
                  <h4 className="dash__meet__head">{item.title}</h4>
                  <p className="dash__meet__time">{item.time}</p>
                  <p className="dash__meet__location">{item.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
