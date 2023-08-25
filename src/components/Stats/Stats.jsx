import { ResponsiveBar } from "@nivo/bar";

import { useEffect, useState } from "react"

function Stats({ data, isLoading, error }) {

  const statsNames = []
  for (let statsIndex = 0; statsIndex < data.stats.length; statsIndex++) {
  statsNames.push(data.stats[statsIndex].stat.name)
  }


  return (
    <div>
        {data && (
        <ResponsiveBar
      //   data={dataSource}
        keys={["statsNames"]}
        // indexBy="Users.city"
        layout="vertical"
        margin={{ top: 0, bottom: 80, left: 60 }}
        colors={{ scheme: "accent" }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          legendOffset: 32,
        }}
      />
        )}
    </div>
  )
}

export default Stats