import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./views/Home";
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Login from './views/Login'
import Router from './Router'

describe("unit-test", () => {
  it("renders the right component with following path '/impressum'", () => {
      const { getByTestId } = render(
          <MemoryRouter initialEntries={['/impressum']}>
              <Login/>
          </MemoryRouter>
      )

    

      expect(getByTestId).toBeInTheDocument()
  })
})


