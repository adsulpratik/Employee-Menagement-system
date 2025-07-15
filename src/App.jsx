import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { getlocalstorage, setlocalstorage } from './Components/Utils/LocalStorage';
import { AuthContext } from './Context/AuthProvider';

function App() {

  const [user, setUser] = useState(null)
  const [loggenInuserData, setloggenInuserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    if (authData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser) {
        setUser(loggedInUser.role)
      }
    }
  }, [authData])




  function HandleLogin(email, password) {
    if (authData) {
      const admin = authData.admin.find(e => e.email === email && e.password === password)
      if (admin) {
        setloggenInuserData(admin)
        setUser("admin");
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))
      }
    } if (authData) {
      const employee = authData.employees.find(e => e.email === email && e.password === password)
      if (employee) {
        setUser("employee");
        setloggenInuserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee" }))
      }
    } else {
      alert("Invalid Credentials");
    }
  }


  const data = useContext(AuthContext)

  return (
    <>
      {!user ? <Login HandleLogin={HandleLogin} /> : ""}
      {user == "employee" ? <EmployeeDashboard data={loggenInuserData} /> : ""}
      {user == "admin" ? <AdminDashboard data={loggenInuserData} /> : ""}

    </>
  )
}

export default App;