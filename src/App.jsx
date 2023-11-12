import * as Tone from "tone";
import  * as p5 from "p5";
import { useState } from "react";

import useDOMControl from "./useDOMControl";

import './App.css'

function App() {

  //react
  let [play, setPlay] = useState(false);

  //synth
  
  let master = new Tone.Gain().toDestination();
  let osc1 = new Tone.Oscillator(440, 'sine').connect(master).start()
  osc1.volume.value = -30
  let osc2 = new Tone.Oscillator(285, "sine").connect(master).start()
  osc2.volume.value = -10


  let wave = new Tone.Waveform()
  master.connect(wave)


  async function playSynth() {

    await Tone.start()
  }

  //visual
  const p5Function = (p5Ref) => {
    const sketch = p => {

      const width = 430
      const height = 932
      p.setup = () => {
        p.createCanvas(width, height)
        p.background(0)
      }

      p.draw = () => {
        p.fill(255)
        p.ellipse(p.width/2,p.height/2,400)
        //array of points
        let buffer = wave.getValue(0);

        
        for(let i = 0; i < buffer.length; i++){
          //map toma CINCO argumentos, indice y rangos.
          //counter
          let x = p.map(i, 0, buffer.length, 0, width)
          // amplitude
          let y = p.map(buffer[i], -1, 1, 0, height)
          p.point(x,y)
        }
      } 
    }

    new p5(sketch, p5Ref)
  } 

  return (
    <>
    <div>
    {useDOMControl(p5Function)}
    </div>
    <button onClick={playSynth}>Play</button>
    </>
  )
}

export default App
