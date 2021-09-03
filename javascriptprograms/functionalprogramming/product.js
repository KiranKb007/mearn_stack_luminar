var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10]
]

// console.log(products.map(pro=>pro[1]));

// console.log(products.filter(pro=>pro[3]>0).map(pro=>pro[1]));

// var out_stock=products.filter(item=>item[3]==0)
// console.log(out_stock);

// console.log(products.filter(pro=>pro[2]>250).map(pro=>pro[1]));

// var low_cost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
// console.log(low_cost_product);

// var high_cost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item2:item1)
// console.log(high_cost_product);


// console.log(products.filter(pro=>pro[2]<200).map(pro=>pro[1]));

// highest stock product
// var highest_stock=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item3)
// console.log(highest_stock);

//find
// console.log(products.find(item=>item[1]=="complan"));

// some
// console.log(products.some(item=>item[2]<200));

// forEach()
// products.forEach(item=>console.log(item[1]))

// sort
products.sort((item1,item2)=>item1[2]-item2[2]).forEach(item=>console.log(item))