export default function SumBox({main, desc, style}){
  return(
    <div className='p-3 sum-box' style={{ ...style }}>
      <h3 className='text-white fw-light text-center'>{main}</h3>
      <p className='text-white mb-0 text-center'>{desc}</p>
    </div>
  )
}