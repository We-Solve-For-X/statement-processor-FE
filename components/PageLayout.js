import Header from './Header';

const PageLayout = (props) => (
  <div style={{width: "100%", height: "100%", backgroundColor: props.color ? props.color : "#DEDEDE", minHeight: "100vh"}}>
    <Header />
    {props.children}
  </div>
);

export default PageLayout;