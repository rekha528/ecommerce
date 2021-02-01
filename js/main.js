fetch("../data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})

function displayData(info){
    // var element=document.querySelectorAll(".div");
    // console.log(element[1])
    // var body=document.querySelector("body");
    // var newElement=document.createElement("h2")
    //  var Element=document.createElement("p")
    //  var image=document.createElement("img")
    // console.log(newElement)
    // newElement.textContent="workshop batch"
    // console.log(Element)
    // Element.textContent="CSE-A&B"
    // body.append(newElement)
    // image.src="img/honor7A.jpg";
    // var sampleElement=document.createElement("img");
    // sampleElement.src="img/ms.jpg";
    // sampleElement.setAttribute("alt","image1 image2 image3");
    // sampleElement.classList.add("class1","class2","class3");
    // sampleElement.classList.remove("class3")
    // var bodyElement=document.querySelector("body");
    // bodyElement.append(sampleElement);
    var bodyElement=document.querySelector("body");
    
    var row=document.createElement("section");
    row.classList.add("row","justify-content-center");
    bodyElement.append(row);
    info.mobiles.map(value=>{
    	var column=document.createElement("article");
    	column.classList.add("col-sm-10","col-md-6","col-lg-3");
    	row.append(column);
    	//card
    	var card=document.createElement("div");
    	card.classList.add("card","md-1");
    	//card  -body
    	var cardBody=document.createElement("div");
    	cardBody.classList.add("card-body");
    	//Image
        var imageElement=document.createElement("img");
        imageElement.src=value.image;
        imageElement.classList.add("img-responsive");
        imageElement.alt=value.name;

        //Name
        var name=document.createElement("h2");
        name.textContent=value.name;
        name.classList.add("text-center","text-primary");

        //price
        var price=document.createElement("p")
        price.classList.add("text-danger","text-center","text-block");
        price.innerHTML="<s>₹"+value.price+"/-</s>";

        var oprice=document.createElement("p");
        oprice.classList.add("text-primary","text-center","text-block");
        oprice.textContent="₹"+value.originalPrice+"/-";

        //button
        var buttonParent=document.createElement("div");
        buttonParent.classList.add("d-grid","gap-2");
        var button=document.createElement("button");
        button.classList.add("btn","btn-warning","btn-block");
        button.textContent="Add to cart";
        buttonParent.append(button);
        //button
        var button1Parent=document.createElement("div");
        button1Parent.classList.add("d-grid","gap-2");
        var button=document.createElement("button");
        button.classList.add("btn","btn-primary","btn-block","mt-3");
        button.textContent="Buy now";
        button1Parent.append(button);

        cardBody.append(imageElement);
        cardBody.append(name);
        cardBody.append(price);
    	card.append(cardBody);
    	column.append(card);
        cardBody.append(oprice);
        cardBody.append(buttonParent);
        cardBody.append(button1Parent);
        // cardBody.append(button1);
    })

}
