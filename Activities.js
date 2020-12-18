import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { getData } from "./Users"
import RowContainer from "../components/RowContainer"

function Activities() {
  return(<div>Activities works</div>)

    export default Activities
}

const data { 
name: 
date: 
description: 
}

const [activitiesData, setActivitiesData] = useState([])
const [deleteactivity] => setdeleteActivity] = deleteActivity([])

const UPDATE_ACTIVITY = gql
  mutation deleteActivity($id: ID, 
  $name: String, 
  $date: String, 
  $description: String) 
  {
  id: ID
  name: String
  date: String
  description: String
}
  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://fakerapi.it/api/v1/custom?_quantity=31&name=word&date=date&description=text")
      setActivitiesData(res.data)
    }
    fetchData()
  }, [])

function rowContainer
  return (
    <>
      {data.activitiesData.map((activity) => (
        <SmallPadding key={activity.name}>
          <RowContainer rowData={activity} type="activity" updatetype="Activity"/>
        </SmallPadding>
      ))}
    </>
  )
}


const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Activities
