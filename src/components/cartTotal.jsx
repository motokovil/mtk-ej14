import React from "react"

export default function CartTotal (props){

    let total =(array)=>{
        let total = 0
        array.map(obj=>{

            if(obj.quantity===1){
                total+=obj.price
            }else if(obj.quantity>1){
                let result = obj.price*obj.quantity
                total+=result
            }
        })
        return total
    }

    return(
        <div>
            <h5>Total: ${total(props.cart)}</h5>
        </div>
    )
}