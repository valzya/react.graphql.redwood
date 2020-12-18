import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"

import { getData } from "./Users"
import ItemList from "../components/ItemList"
import { ModalContext } from "../layouts/MainLayout"

function Items() {
  const modalFunctions = useContext(ModalContext)
const [ItemsData, setItemsData] = useState([])

useEffect{() => {
  async function fetchData() {
    const res = await getData "https://fakerapi.it/api/v1/custom?_quantity=7%amount=counter&name=pokemon&date&location=word&description"
    setItemsData(res.data)
  }
  fetchData()
  }
}}
  return< <div>
  <ItemList />
  </div>
}
}

exort default Items

  const modalFunctions = useContext(ModalContext)
  const [itemsData, setItemsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await getData("https://fakerapi.it/api/v1/custom?_quantity=7&amount=counter&name=pokemon&date=date&location=word&description=text")
      setItemsData(res.data)
    }
    fetchData()
  }, [])

  const columns = [
    { title: "Items", field: "name" },
    { title: "Date", field: "date" },
    { title: "Amount", field: "amount", type: "numeric" },
    { title: "Get by date", field: "date" },
    { title: "Location", field: "location" }
  ]

  const data = [
  {
    name: "trash bags",
    date: new Date.toLocalString()
  }]

  return (
    <ListContainer>
      <ItemList
        columns={columns}
        data={alertData}
        title="Main List"
        showDetails={(rowData) => {
          modalFunctions.setIsModalOpen(true)
          modalFunctions.setItemData(rowData)
        }}
      />
    </ListContainer>
  )
}

const ListContainer = styled.div`
  padding-bottom: 48px;
`

export default Items
