
import Title from './component/text/title';
import ResetBtn from './component/buttons/resetBtn';
import Grid from './component/grid/grid';
import Message from './component/text/message';
import CheckBtn from './component/buttons/checkBtn';
import SubmitBtn from './component/buttons/submitBtn';


export default function Home() {
  return (
    <>
      <div className={HomeStyle.header}>
        <Title />
        <ResetBtn />
      </div>
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
  header: 'flex justify-between items-end mt-10 mb-2',
  btns: 'flex items-start gap-12 px-5 py-6',
}