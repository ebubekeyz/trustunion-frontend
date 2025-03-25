import { redirect } from "react-router-dom";
import { Settings as Set } from '../DashboardComponent';



export const loader = (store) => async () => {
  const user = store.getState().userState.user;
  if (!user) {
    return redirect('/login');
  }

  return null;
};



const Settings = () => {
  return (
    <div><Set /></div>
  )
}
export default Settings