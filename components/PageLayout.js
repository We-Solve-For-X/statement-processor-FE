import Header from './Header';

const PageLayout = props => (
  <div style={{width: "100vw", height: "100vh", backgroundColor: "#DEDEDE"}}>
    <Header />
    {props.children}
  </div>
);

export default PageLayout;