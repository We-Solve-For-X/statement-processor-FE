import Header from './Header';
import spacing from "../config/spacing";

const PageLayout = (props) => (
  <div style={{width: "100%", height: "100%", backgroundColor: props.color ? props.color : "#DEDEDE", minHeight: "100vh"}}>
    <Header />
    <div style={{boxSizing: "border-box", paddingLeft: spacing.pageBorderDefault1, paddingRight: spacing.pageBorderDefault1, paddingTop: 80, width: "100%", height: "100%", 
    backgroundColor: props.color ? props.color : "#DEDEDE", minHeight: "100vh"}}>
    {props.children}
    </div>
  </div>
);

export default PageLayout;