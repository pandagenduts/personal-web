const Modal = ({ showModalHandler }) => {
  const showModalAction = () => {
    showModalHandler();
  }

  return (
    <div id="modal-backdrop" className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-slate-900" onClick={showModalAction}>

      <div id="modal-content" className=" z-20 max-w-lg w-full min-h-[500px] bg-white">

      </div>
    </div>
  )
}

export default Modal