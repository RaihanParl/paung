import React from "react";
import { FixedSizeGrid as Grid } from "react-window";

const Cell = ({ columnIndex, rowIndex, style, data: propsData }) => {
  const { data, fields } = propsData;

  return (
    <div
      className={`flex items-center justify-center truncate ${
        rowIndex % 2 === 0 ? "bg-moon-gray" : "bg-white"
      }`}
      style={style}
    >
      {data[rowIndex][fields[columnIndex]]}
    </div>
  );
};

export const Table = ({ data }) => {
  // You can code here
  const [firstData = {}] = data;
  const memoizedData = React.useMemo(() => Object.keys(firstData), [firstData]);

  return (
    <div
      className="w-100"
      style={{ height: "75vh" }}
      data-testid="table-wrapper"
    >
      <Grid
        itemData={{ data, fields: memoizedData }}
        columnCount={memoizedData.length}
        columnWidth={150}
        height={500}
        rowCount={data.length}
        rowHeight={50}
        width={500}
      >
        {Cell}
      </Grid>
    </div>
  );
};
