import React, { useCallback } from 'react';

// function TodoCount({onSelectedGroup}) {
//     const $count = document.querySelector('.todo-count')
//     const $all = document.querySelector('.all')
//     const $active = document.querySelector('.active')
//     const $completed = document.querySelector('.completed-job')
    
//     this.todoItems = []
    
//     this.setState = items => {
//         this.todoItems = [...items]
//         this.render(this.todoItems)
//     }
    
//     this.removeSelected = () => {
//         $all.classList.remove('selected')
//         $active.classList.remove('selected')
//         $completed.classList.remove('selected')
//     }
    
//     this.onShowSelectedItems = (event, element, status) => {
//         event.preventDefault()
//         this.removeSelected()
//         element.classList.toggle('selected')
//         let selectedItems = this.todoItems
//         if (status === 'completed' || status === 'active') {
//         selectecItems = this.todoItems.filter(
//         item => item.status === status)
//     }
//         this.render(selectedItems)
//         onSelectedGroup(selectedItems)
//     }
    
    // this.init() {
    //     $all.addEventListener('click', event => onShowAllItems(event, $all, ''))
    //     $active.addEventListener('click', event => onShowActiveItems(event, $active, 'active'))
    //     $completed.addEventListener('click', event => onShowCompletedItems(event, $completed, 'completed'))
    // }
    
    // this.render(items) {
    //     $count.innerHTML = TodoCountTemplate(items)
    // } 
// }

function TodoCount () {

// //     return (

// //     );
}

export default TodoCount;