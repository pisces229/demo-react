import { ReactNode, useEffect, useRef } from 'react';
import { useLocation, useNavigationType, useNavigate, useMatch, useParams } from 'react-router-dom';

const Index = (props: { children: ReactNode }) => {
  const init = useRef(true);
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  const params = useParams();
  const match = useMatch({ path: '/' });
  useEffect(() => {
    if (init.current) {
      init.current = false;
    } else {
      console.log('navigationType:', navigationType);
      console.log('location:', location);
      console.log('param:', params);
      console.log('match:', match);
    }
  }, [location, match, navigationType, params]);
  const onClickGo = (name: string) => {
    // console.log(`${location.pathname}${name}`);
    const count = location.state ? location.state.count : 0;
    navigate(`/${name}`, {
      state: {
        count: count + 1,
      },
    });
  };
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <>
      {props.children}
      <button onClick={() => onClickGo('')}>Go Index</button>
      <button onClick={() => onClickGo('first')}>Go First</button>
      <button onClick={() => onClickGo('second')}>Go Second</button>
      <button onClick={() => onClickGo('third')}>Go Third</button>
      <button onClick={onClickBack}>Back</button>
    </>
  );
};
export default Index;
