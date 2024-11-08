
import Title from './component/text/title';
import ResetBtn from './component/buttons/resetBtn';
import Grid from './component/grid/grid';
import Message from './component/text/message';
import CheckBtn from './component/buttons/checkBtn';
import SubmitBtn from './component/buttons/submitBtn';


export default function Home() {
  return (
    <>
      <Title />
      <ResetBtn />
      <Grid />
      <Message />
      <div className={HomeStyle.btns}>
        <CheckBtn />
        <SubmitBtn />
      </div>
    </>
  )
}

const HomeStyle = {
  btns: 'flex'
}