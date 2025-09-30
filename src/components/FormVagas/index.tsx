import { FormEvent, useState } from 'react'

import { StyledFormVagas, StyledBtn, StyledInput } from './FormVaga'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledFormVagas onSubmit={aoEnviarForm}>
      <StyledInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <StyledBtn type="submit">Pesquisar</StyledBtn>
    </StyledFormVagas>
  )
}
export default FormVagas
