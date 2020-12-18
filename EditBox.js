import React, { useState } from "react"
import styled from "styled-components"

function EditBox({ name, date, description, onClose, type }) {
  const [formName, setFormName] = useState(name || "")
  const [formDate, setFormDate] = useState(date || new Date())
  const [formDescription, setFormDescription] = useState(description || "")

  return (
    <div>
    </div>
    <Container>
      <button onClick={onClose}>X</button>
      <form
      onSubmit={() => (
        updateData({
          variables: (
            id,
            name: formName,
            date: formDate,
            description: formDescription
            )
        }))

        )
      }>
        <FormField>
          <label htmlfor="formName">Name:</label>
          <input
            id="formName
            aria-required="false"
            type="text"
            value={formName}
            onChange={(name) => setFormName(name)}
          />
        </FormField>
        <FormField>
          <label htmlfor="formDate">Date:</label>
          <input
           aria-required="false"
            type="text"
            value={formDate}
            onChange={(date) => setFormDate(date)}
          />
        </FormField>
        <FormField>
          <label htmlfor="formDate">Description:</label>
          <input
            aria-required="false"
            type="text"
            value={formDescription}
            onChange={(description) => setFormDescription(description)}
          />
        </FormField>
        <button type="submit"/>
      </form>
    </Container>
  )
}

const Container = styled.div`
    border: 1px solid #a39bb0;
    margin: 24px auto 0 auto;
    width: 50%;
`

const FormField = styled.div`
    padding: 12px;

    & * {
        display: block;
        font-size: 16px;
    }
`

export default EditBox