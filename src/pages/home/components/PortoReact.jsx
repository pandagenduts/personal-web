import Luxe from "../../../assets/Luxe.png";

const projectDatas = [
  {
    title: 'Space Tourism',
    imageCover: '',
    projectURL: '',
    description: 'lorem ipsum <br /> dolor sit amet <br /> <a href="http://google.com" target="_blank" rel="noopener noreferrer">Source</a>',
    techExplanation: '',
  }
]

const PortoReact = () => {
  return (
    <>
      <div className="min-h-[400px] bg-slate-500">
        <img src={Luxe} className="object-cover w-full h-full" />
      </div>
      <div className="min-h-[400px] bg-slate-700">
        {projectDatas.map(item => (
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
        ))}
      </div>
      <div className="min-h-[400px] bg-slate-900"></div>
    </>
  );
};

export default PortoReact;
