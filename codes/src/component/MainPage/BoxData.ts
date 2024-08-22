class BoxData{
    id: number;
    img: string;

    constructor(img:string){
        this.id = Math.random() * 100
        this.img = img;
    }
}

export default BoxData;