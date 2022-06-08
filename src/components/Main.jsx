import Contacts from "./Contacts"
import Posts from "./Posts"

const Main = () => {
  return (
    <div>

      <Posts/>

        <Contacts 
        name={"Raminta"}
        email={"raminta@gmail.com"}
        age={18}
        />
    </div>
  )
}

export default Main