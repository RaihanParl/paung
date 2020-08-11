import React from "react";
import "./styles.css";
import { Table } from "./components/Table/index";
import { server } from "./API/index";

export default () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await server.get("/users");
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [setData]);

  return (
    <div className="App w-100 flex flex-column">
      <h1>Delman.io Code Exercise</h1>

      <div className="w-100 h-100 flex flex-column">
        <h3>My Table</h3>
        <Table data={data} />
      </div>
    </div>
  );
};
