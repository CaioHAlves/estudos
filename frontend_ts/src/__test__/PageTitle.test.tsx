import React from 'react';
import { PageTitle } from '../components'
import { screen, render } from '@testing-library/react'

describe("Deve renderizar componente de titulos", () => {
  test("Se renderiza corrretamente", () => {
    render(<PageTitle title="Teste de renderização"/>)

    screen.logTestingPlaygroundURL();
    //Verifica se tem algum texto com o titulo informado
    screen.logTestingPlaygroundURL(screen.getByText("Teste de renderização"));
    //Verifica se tem o elemento informado.
    //Para saber como buscar os elementos consulte o seguinte link: 
    //https://www.w3.org/TR/html-aria/#docconformance
    screen.getAllByRole("heading");
  })
})