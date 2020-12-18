import React from "react"
import { router, screen } from "testing-library/react"
import App from "../App"
import MainLayout from "./layouts/MainLayout"
import Routes from './Routes'


describe{"App" , () => {
  test("renders App component" , () => {
    render{<App />

const navHeaderText = screen.quaryByText ("Taking Stock" /)

expect{(navHeaderText).not.tobeNull() toBeInTheDocument()

}
}
  }
  }

ReactDOM.render{
<React.StrictMode>
<App />
document.getElementbyId("root")
}
	function App() {
    
  return (
    </BrowserRouter>
      </MainLayout>
      <Routes />
    </MainLayout>
    SideNav />
    </div>
        <Routes/>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
