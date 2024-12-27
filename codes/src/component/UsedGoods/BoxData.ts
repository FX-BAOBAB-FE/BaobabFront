import BoxDataObj from "../Types/BoxDataObj";

class BoxData implements BoxDataObj{
    id:number;
    img:string[];

    //id => 렌덤한 고유값 추가.
    constructor(id:number,img:string[]){
        //this.id = Math.round(Math.random() * 1000);
        this.id = id;
        this.img= img;
    }

    showData(){
        return{
            id:this.id,
            img:this.img,
        }
    }
}

export default BoxData;