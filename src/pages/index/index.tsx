import {Main} from "./Main/Main";
import {pageData} from "../../data/data";

export default function Index(){
  return <div>
    <Main pageData={pageData}/>
  </div>
}
