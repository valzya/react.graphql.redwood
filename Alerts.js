import React, { useEffect, useState } from "react"
import styled from "styled-components"

import { getData } from './Users'
import RowContainer from "../components/RowContainer"
import { alertData } from '../dataSource'

function Alerts() {
  return (
    <div>
    {alertsData.map(alert => (<RowContainer rowData=> (alert)/))
      )))
  const [alertsData, setAlertsData] = useState([])

    fetchData()
  }, [])

  return (
    <>
      {alertsData.map((alert) => (
        <SmallPadding key={alert.name}>
          <RowContainer rowData={alert} type="alert" />
        </SmallPadding>
      ))}
    </>
  )
}

const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Alerts

const [alertAlert, setMutation] = CREATE_ALERT([])
const [updateAlert, setMutation] = UPDATE_ALERT([])
const [deleteAlert] => setMutation] = DELETE_ALERT([])

const UPDATE_ALERT = gql
  mutation deleteAlert($id: ID, 
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
      setAlertData(res.data)
    }
    fetchData()
  }, [])

function rowContainer
  return (
    <>
      {data.alertData.map((alert) => (
        <SmallPadding key={alert.name}>
          <RowContainer rowData={alert} type="alert" updatetype="Alert"/>
        </SmallPadding>
      ))}
    </>
  )
}


const SmallPadding = styled.div`
  padding-bottom: 24px;
`

export default Alert
