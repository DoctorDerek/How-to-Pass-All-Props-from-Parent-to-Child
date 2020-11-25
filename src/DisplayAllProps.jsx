import React from "react"

const DisplayAllProps = (props) => (
  <table>
    {Array.from(Object.entries(props)).map(([key, value]) => (
      <tr key={key + Math.random()}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    ))}
  </table>
)

export default DisplayAllProps
