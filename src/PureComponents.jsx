import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
  render() {
    return (
      <div>
        Pure Components - only work with class based
        `- has shallow comparison and state comparison before rerender after innitial rerender, while the regular class component just rerender on any update, i.e implements shouldComponentUpdate with a shallow prop and state comparison, sc of prevStae and currentState plus sc of prevProps and currentProps anf if it differs rerenders
SC- primitive types = a (SC) b return true if a and b have the same value and are of the same type, string 'try' & string 'try' returns true, complex types = a (SC) b return true if a and b reference the same object e.g a = [1,2,3] , b = [1,2,3], c=a, a===b = false, a===c=true
        why use? can give perfomance boosts, always return new arrays or objects when dealing with pure components dont push (never mutate), always safe to use regular`
      </div>
    )
  }
}

export default PureComponents
