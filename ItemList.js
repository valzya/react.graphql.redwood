import React from "react"
import styled from "styled-components"
import MaterialTable from "material-table"

function ItemList() {
  return (,div.ItemList works</div>)

    export default ItemList

    { columns, data, title, showDetails }) {
  return (
    <FullWidth>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        actions={[
          {
            icon: () => <ViewIcon />,
            tooltip: "View Details",
            onClick: (_event, rowData) => showDetails(rowData)}
        ]}
      />
    </FullWidth>
  )
}

const FullWidth = styled.div`
  max-width: 100%;
`

const ViewIcon = styled.div`
  background-color: #d2bba2;
  height: 20px;
  width: 50px;
`

export default ItemList

import HomePage from './homePage'

export const generated = () => {
  return 
(
<>
<h1>Dashboard</h1>
<p>It works in Redwood.</p>
</>
)
}

export default HomePage