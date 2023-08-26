import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import './Stats.css'

function Stats({ data, isLoading, error }) {

  const shownStats = []

  if (data) {
    for (let statsIndex = data.stats.length-1; statsIndex >= 0; statsIndex--) {
      const entry = {
        name : data.stats[statsIndex].stat.name,
        value : data.stats[statsIndex].base_stat
      }
      shownStats.push(entry)
    }
  }

  return (
    <div className="chartContainer">
      {!isLoading && (
        <ResponsiveBar
          data={shownStats}
          keys={["value"]}
          indexBy="name"
          margin={{ top: 0, bottom: 80, left: 120, right: 60 }}
          padding={0.2}
          colors={{ scheme: 'nivo' }}
          valueScale={{ type: "linear" }}
          layout="horizontal"
          animate={true}
          axisLeft={{
            tickSize: 2,
            tickPadding: 10,
            tickRotation: 0,
            legendOffset: 32,
          }}
        />
      )}
    </div>
  )
}

export default Stats