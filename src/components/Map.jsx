import React from "react";
import { ResponsiveChoropleth } from "@nivo/geo";
import {geoFeatures} from "../contexts/mockGeoFeatures"
const Map = ({ data }) => {
  return (
    <ResponsiveChoropleth
    theme={{
      legends:{
        text:{
          // stroke: "gray",
          // strokeWidth: 1,
          fontSize: 15,
        }
      }
    }}
      data={data}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={106}
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderColor="#152538"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: "gradient",
          type: "linearGradient",
          colors: [
            {
              offset: 0,
              color: "#000",
            },
            {
              offset: 100,
              color: "inherit",
            },
          ],
        },
      ]}
      fill={[
        {
          match: {
            id: "CAN",
          },
          id: "dots",
        },
        {
          match: {
            id: "CHN",
          },
          id: "lines",
        },
        {
          match: {
            id: "ATA",
          },
          id: "gradient",
        },
      ]}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -97,
          itemsSpacing: 3,
          itemWidth: 111,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default Map;
