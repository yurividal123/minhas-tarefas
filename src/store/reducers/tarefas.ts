import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

const tarefaSlice = createSlice({
  name: 'tarefas',
  initialState: {
    itens: [
      new Tarefa(
        'Estudar JavaScript',
        enums.Prioridade.IMPORTANTE,
        enums.Status.PENDENTES,
        '',
        1
      ),
      new Tarefa(
        'Estudar TypeScript',
        enums.Prioridade.URGENTE,
        enums.Status.CONCLUIDA,
        'Rever aula 2 do módulo',
        2
      ),
      new Tarefa(
        'Estudar React',
        enums.Prioridade.URGENTE,
        enums.Status.PENDENTES,
        'Praticar o userEffect',
        3
      )
    ]
  },
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefaSlice.actions

export default tarefaSlice.reducer
