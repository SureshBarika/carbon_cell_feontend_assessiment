import { Component } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import {
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Legend,
  Cell,
} from "recharts";

import "./index.css";

class PieCharts extends Component {
  state = {
    populationList: [],
    loader: true,
  };

  componentDidMount() {
    this.getThePopulationData();
  }

  getThePopulationData = async () => {
    const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const responce = await fetch(url);
    const data = await responce.json();
    const datalis = [data.bpi.EUR, data.bpi.USD, data.bpi.GBP];
    const filterData = datalis.map((year) => {
      return {
        code: year.code,
        rate: year.rate,
        rateFloat: year.rate_float,
        symbol: year.symbol,
        description: year.description,
      };
    });

    this.setState({
      populationList: filterData,
      loader: false,
    });
  };

  renderDataGraph = () => {
    const { populationList } = this.state;

    return (
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={populationList}
            startAngle={0}
            endAngle={360}
            dataKey="rateFloat"
            innerRadius="40%"
            outerRadius="70%"
          >
            <Cell dataKey="code" name="USD" fill="#DD5400" />
            <Cell dataKey="code" name="GBP" fill="#EA1515" />
            <Cell dataKey="code" name="EUR" fill="#A0B405" />
          </Pie>
          <Tooltip />
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="bottom"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  renderLoader = () => (
    <div className="loader-container">
      <FidgetSpinner
        visible="true"
        color="#F3E217"
        height="100"
        width="100"
        ariaLabel="infinity-spin-loading"
        ballColors={["#F34024", "#C428F3", "#45F6B6"]}
        backgroundColor="#46BF03"
      />
    </div>
  );

  render() {
    const { loader } = this.state;

    return (
      <div className="line-bar-cont">
        {loader ? this.renderLoader() : this.renderDataGraph()}
      </div>
    );
  }
}

export default PieCharts;
