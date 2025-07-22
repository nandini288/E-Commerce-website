fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
    data.forEach(item=>{
        let card=document.createElement('div')
        card.setAttribute("class","card")
        card.setAttribute("align","center")
        let itemtitle=document.createElement('div')
        itemtitle.setAttribute("class","itemtitle")
        itemtitle.innerText=item.title
        let itemimage=document.createElement('img')
        itemimage.setAttribute("src",item.image)
        itemimage.setAttribute("alt","")
        itemimage.setAttribute("width","250px")
        itemimage.setAttribute("height","150px")
        itemimage.setAttribute("class","itemimage")
        let itemprice=document.createElement('div')
        itemprice.innerText="Price:"+item.price
        let itembtn=document.createElement('button')
        itembtn.setAttribute("type","button")
        itembtn.setAttribute("class","itembtn")
        itembtn.innerText="Add to Cart"
        card.append(itemtitle,itemimage,itemprice,itembtn)
        document.getElementById('products').appendChild(card)
    })
}).catch(err=>{
    console.log("error in fetch data")
})