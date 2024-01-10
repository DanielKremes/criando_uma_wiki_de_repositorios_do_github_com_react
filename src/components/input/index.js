import React from 'react'
import { InputContainer } from './styles'


export default function Input({ value, onChange }) {
    return (
        <InputContainer>
            <input type="text" placeholder="user/name_repository" value={value} onChange={onChange} />
        </InputContainer>
    )
}
