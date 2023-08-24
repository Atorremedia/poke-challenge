// import { ResponsiveBar } from "@nivo/bar";

function Stats({ data }) {

      // const dataSource = data;

  return (
    <div>
        {data && (
      <h2>STATS HERE</h2>
      //   <ResponsiveBar
      //   data={dataSource}
      //   keys={["Users.count"]}
      //   indexBy="Users.city"
      //   margin={{ top: 0, bottom: 80, left: 60 }}
      //   colors={{ scheme: "accent" }}
      //   axisBottom={{
      //     tickSize: 5,
      //     tickPadding: 5,
      //     tickRotation: 45,
      //     legendOffset: 32,
      //   }}
      // />
        )}
    </div>
  )
}

export default Stats