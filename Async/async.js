function getData(getId) {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("data", getId);
            resolve("Success");
        }, 2000);
    });
}

async function getWhetherData(){
    console.log("getting data1.....");
    await getData(1);
    console.log("getting data2.....");
    await getData(2);
    console.log("getting data3.....");
    await getData(3);

}