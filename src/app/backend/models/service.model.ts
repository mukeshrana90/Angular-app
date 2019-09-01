export class Service {
    public name: string;
    public description: string;
    public imagePath: string;
    public originalPrice: number;
    public salePrice: number;

    constructor(name: string, description: string, imagePath: string, originalPrice: number, salePrice: number) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.originalPrice = originalPrice;
        this.salePrice = salePrice;
    }
}