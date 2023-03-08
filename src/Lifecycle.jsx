import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'lyonsEE'
        }
        console.log('lifecycle A-constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('lifecycle B-getDerivedStateFromProps')
        console.log('lifecycle A-update-getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecycle D-ComponentDidMount')
    }

    shouldComponentUpdate() {        
        console.log('lifecycle A-updaTe-shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate() {     
        console.log('lifecycle A-update-getSnapshotBeforeUpdate')
        return null
    }
    
    componentDidUpdate() {     
        console.log('lifecycle e-update-didUpdate')
        return null
    }
    
    componentWillUnmount() { 
        // use this to clean up
        console.log('lifecycle e-update-didUpdate')
        return null
    }

    render() {
        console.log('lifecycle C-render')
        console.log('lifecycle c-Update-render')
        return (
            <div>
                Lifecycle methods - in class  components
                Mounting - when an instance of a component is being created and inserted into the dom'. constructor, static getDerivedStateFromProps, render and componendtDidMount

                Updating - when a component is being rerendered as a result of changes to either props or state.  static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate and ComponendtDidUpdate

                UnMounting - when a component is being removed from dom. ComponentWillUnmount

                Error Handling - when there is an error rendering , or in the constructor of any child component. getDerivedStateFromError and ComponendtDidCatch

                Mounting
                (1) Constructor, called whenever a component is created,
                do - initializing state, binding event handlers
                dont - cause side effects e.g http requests
                (2) static getDerivedStateFromProps(props, state) - when the state depends on changes in props overtime
                do - set state
                dont - cause side effects
                (3) render() - only required method
                reads props and state and return jsx
                children lifecycle methods are also executed
                do not change state or interact with dom or make ajax calls
                (4) ComponentDidMount() - invoked immediately after a component and its children have been rendered to the dom.
                perfect place to cause side effects e. interact with the dom or perfom ajax calls to load data
                
                
                Updating
                (1) static getDerivedStateFromProps(props, state) - dictates if component rerender or not
                    do - set state
                    don't - cause side effects
                (2) shouldComponentUpdate(nextProps, nextState) - compare existing state with next one and return fals eor true
                     do not change state(no setState) or make ajax calls , no sideeffects
                (3) render() - only required method
                    reads props and state and return jsx
                    children lifecycle methods are also executed
                    do not change state or interact with dom or make ajax calls
                (4) getSnapshotBeforeUpdate(prevProps, prevStates) - called right before changes from virtual dom are reflected in the dom
                    capture some info from the dom(e.g mouse position)
                (5) ComponentDidUpdate(prevProps, prevState, snapshot) - called after the render is finished in the re-render cycles, cause side effects after comparing the prev and current props values
            </div>
        )
    }
}

export default Lifecycle