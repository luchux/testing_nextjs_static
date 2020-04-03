import * as React from 'react'

const App = (props) => {
  return (
   <div>
      React Native for Web & Next.js
      Static Prop: {props.value}
    </div>
  )
};


//I here we fetch asynchrounously stuff, it will be fetch at build time and statically served.
export const getStaticProps = async () => {
  //const time = await getPreviewTime()
  //console.log(time)
  //return {props:  {value: String(time)} };
  return {props: {value: Math.random()}}
}

export default App;