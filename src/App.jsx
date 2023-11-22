import * as Tone from "tone";
import  * as p5 from "p5";
import { useState } from "react";
import useDOMControl from "./useDOMControl";
import Writes from "./Writes";
import './App.css'


function App() {

  //react
  let [play, setPlay] = useState(false);

  //synth
  let master = new Tone.Gain().toDestination();

  let autoFilter = new Tone.AutoFilter("1n").connect(master).start();

  let osc1 = new Tone.Oscillator(285, 'sine').connect(autoFilter).start()
  osc1.volume.value = -59
  let osc2 = new Tone.Oscillator(1020, "sine").connect(autoFilter).start()
  osc2.volume.value = -32
  let osc3 = new Tone.Oscillator(1111, "sine").connect(autoFilter).start()
  osc2.volume.value = -33
  let omniOsc = new Tone.OmniOscillator(606, "pwm").connect(autoFilter).start();
  omniOsc.value = -59


  let wave = new Tone.Waveform()
  master.connect(wave)



  const playSynth = async () => {
      await Tone.start()
      setPlay(!play)
  }
  //visual
  const p5Function = (p5Ref) => {
    const sketch = p => {

      const width = 1200
      const height = 890
      p.setup = () => {
        p.createCanvas(width, height)
      }

      p.draw = () => {
        p.background(0)
        p.fill(255)
        p.ellipse(p.width/2,p.height/2,900)
        //array of points
        let buffer = wave.getValue(0);
        
        
        for(let i = 1; i < buffer.length; i++){
          //map toma CINCO argumentos, indice y rangos.
          //counter
          let x1 = p.map(i-1, 0, buffer.length, 0, width)
          // amplitude
          let y1 = p.map(buffer[i-1], -1, 1, 0, height)

          let x2 = p.map(i, 0, buffer.length, 0, width)
          let y2 = p.map(buffer[i], -1, 1, 0, height)
          p.line(x1,y1,x2,y2)
          p.stroke('#fae')
        }
      } 
    }

    new p5(sketch, p5Ref)
  } 

  return (
    <>
    <div>
    <Writes></Writes>
    {useDOMControl(p5Function)}
    </div>
    <button onClick={playSynth}>{"Sound"}</button>

    </>
  )
}

export default App
