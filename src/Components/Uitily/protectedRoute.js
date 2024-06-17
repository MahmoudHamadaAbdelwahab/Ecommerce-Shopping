import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({auth , children}) {
  // auth => It is a layer that is located before any page, by checking whether it is a user, an addict, or not.
  // children => it's rendered component inside other component 
  // outLine => it's rendered more then component 
  if(auth === false){
    return <Navigate to="/" replace />
  }
  return children ? children : <Outlet/>
}
