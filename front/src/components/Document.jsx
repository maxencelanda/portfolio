import cv from "../assets/cv_landa_maxence_data.pdf"
import excel from "../assets/images/bts_sio_landa_maxence.png"
import attestation1 from "../assets/images/LANDA-SIO-2023.png"
import attestation2 from "../assets/images/attestation2.png"
import cvImg from "../assets/images/cv_landa_maxence_data.png"

export default function Document() {


  return (
    <div>
      <p className="text-center">CV</p>
      <a href={cv} download="CV_landa_maxence.pdf" className="mx-auto bg-white p-2 mt-5 rounded-lg border border-black hover:bg-slate-100">Télécharger CV</a>
      <img src={cvImg} className="my-5 w-1/2 object-contain"></img>
      <p className="text-center mt-10">Attestation</p>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <img src={excel} className="max-h-[1200px] mt-10 row-span-2"></img>
        <img src={attestation1}></img>
        <img src={attestation2}></img>
      </div>
    </div>
  )
}
