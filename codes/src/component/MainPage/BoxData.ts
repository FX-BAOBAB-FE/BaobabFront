class BoxData{
    id: number;
    img: string[];

    constructor(img:string[]){
        this.id = Math.round(Math.random() * 1000);
        this.img = img;
    }
}

export default BoxData;