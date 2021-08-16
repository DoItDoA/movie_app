import React from "react";
//console.log(props); 이용하여 location 부분을 보면 전송된 것을 볼수 있다.
//react-router로 전송된 컴포넌트에 props가 있는데 그 history가 있다.
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      //링크 클릭이 아닌 주소로 movie-detail로 들어오면 props가 없어 undefined로 정의 되어 history 안의 push를 이용한다
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
