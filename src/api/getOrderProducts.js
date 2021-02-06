

export const getOrderProductsByNickname = (nickname) => {
    return (
        fetch(`http://localhost:3000/products/orderedProducts/${nickname}`)
            .then(res => {
                if(res.ok) {
                    return res.json()
                }
            }).then(resJson => resJson)
            .catch(error => console.log("Something went wrong!!!", error))
    )
}