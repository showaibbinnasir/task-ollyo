import "./Product.css"
const Product = (props) => {
    //recieving data from props and destructuring properties
    const {data, dragItem, dragOverItem, handleSort, handleCheck, index} = props;
    return (
        <div
            onDragStart={(e)=> dragItem.current = index}
            onDragEnter={(e)=> dragOverItem.current = index}
            onDragEnd={handleSort}
            onDragOver={(e)=> e.preventDefault()}
         draggable className="hoverItem p-2 relative rounded-lg w-[200px] border border-black h-[200] flex justify-center">
            <input id={index} className=" absolute left-5 w-6 h-6" onChange={(e)=>handleCheck(e,data,index)} type="checkbox" />
            <img src={data.image} className="rounded-lg" alt="" />
        </div>
    );
};

export default Product;