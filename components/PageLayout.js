import Header from './Header';

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
};

const PageLayout = props => (
  <div style={{width: "100vw", height: "100vh", backgroundColor: "#DEDEDE"}}>
    <Header />
    {props.children}
  </div>
);

export default PageLayout;