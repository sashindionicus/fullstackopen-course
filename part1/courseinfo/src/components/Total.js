const Total = ({parts}) => {
    var total = parts.reduce(function(prev, curr) {return prev + curr.exercises}, 0)

    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total