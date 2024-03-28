import { Component } from "react";
import { FidgetSpinner } from "react-loader-spinner";
import {
  ResponsiveContainer,
  LineChart,
  YAxis,
  XAxis,
  Line,
  Legend,
  Tooltip,
  CartesianGrid,
} from "recharts";

import "./index.css";

class PopulationBarChart extends Component {
  state = {
    populationList: [],
    loader: true,
  };

  componentDidMount() {
    this.getThePopulationData();
  }

  getThePopulationData = async () => {
    const bitUrl = "https://api.coindesk.com/v1/bpi/currentprice.json";

    const birReaponse = await fetch(bitUrl);
    const biddata = await birReaponse.json();
    console.log(biddata);

    const url =
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
    const responce = await fetch(url);
    const data = await responce.json();
    console.log(data);
    const filterData = data.data.map((year) => {
      return {
        nation: year.Nation,
        year: year.Year,
        population: year.Population,
        id: year["ID Nation"],
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
        <LineChart
          data={populationList}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid />
          <XAxis color="#fff" dataKey="year" />
          <YAxis />
          <CartesianGrid
            strokeDasharray="3 3"
            fill="#616161"
            fillOpacity={0.5}
          />
          <Tooltip />
          <Legend height="15" layout="vertical" />
          <Line dataKey="population" stroke="#24BF14" />
        </LineChart>
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

export default PopulationBarChart;
