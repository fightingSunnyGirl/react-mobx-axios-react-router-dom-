import React,{useState,useEffect} from 'react';

export function Example(){
  const [count,setCount] = useState(0);
  return(
    <div>
      <p>点击了{count}times</p>
      <button onClick={()=>setCount(count+1)}>点我</button>
    </div>
  )
}

export function ExampleEffectHook(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    document.title = `你点击了${count}次`
  }) 
  return(
    <div>
      <p>点击了{count}次</p>
      <button onClick={()=>setCount(count+1)}>点我</button>
    </div>
  )
}
export function Counter(){
  const [count,setCount] = useState(0);
  useEffect(()=>{
    const id = setInterval(()=>{
      setCount(c=>c+1);
    },1000)
    return ()=> clearInterval(id);
  },[]);
  return <h1>{count}</h1>
}

export function ContextExample(){

}
