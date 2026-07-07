import { Fragment } from "react";
import Cat from './Cat';
import Dog from './Dog';
function greeting(){

  return (
    /* fragment is use to group elements together or you can use "<></>"*/
    <Fragment>
        <Dog />
        <Cat />
  </Fragment> 
  )
}

{/*this is a comment on react.*/}
export default greeting;