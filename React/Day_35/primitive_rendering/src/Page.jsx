import StringOne, {
  StringTwo, 
  StringThree, 
  StringFour, 
  StringFive, 
  StringSix, 
  StringSeven, 
  StringEight, 
  StringNine, 
  StringTen
} from "./components/String"

import NumberFirst, {
  NumberSecond,
  NumberThird,
  NumberFourth,
  NumberFifth,
  NumberSixth,
  NumberSeventh,
  NumberEighth,
  NumberNinth,
  NumberTenth
} from './components/Number'


import Boolean1, {
  Boolean2,
  Boolean3,
  Boolean4,
  Boolean5,
  Boolean6,
  Boolean7,
  Boolean8,
  Boolean9,
  Boolean10
} from "./components/Boolean"
const Page = () => {
  return (
    <>
    <h1>Pages</h1>

    
    <h1>Strings:</h1>


    <StringOne/>
    <StringTwo/>
    <StringThree/>
    <StringFour/>
    <StringFive/>
    <StringSix/>
    <StringSeven/>
    <StringEight/>
    <StringNine/>
    <StringTen/>

    <h1>Numbers:</h1>

    <NumberFirst/>
    <NumberSecond/>
    <NumberThird/>
    <NumberFourth/>
    <NumberFifth/>
    <NumberSixth/>
    <NumberSeventh/>
    <NumberEighth/>
    <NumberNinth/>
    <NumberTenth/>

    <h1>Boolean-Ternary:</h1>

    <Boolean1/>
    <Boolean2/>
    <Boolean3/>
    <Boolean4/>
    <Boolean5/>
    <Boolean6/>
    <Boolean7/>
    <Boolean8/>
    <Boolean9/>
    <Boolean10/>


    </>

  )
}

export default Page