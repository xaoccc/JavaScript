class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.isOn = false;
        this.quality = quality;        
    }

    turnOn() {
        this.quality -= 1;
        this.isOn = true;
    }

    turnOff() {
        this.quality -= 1;
        this.isOn = false;
    }

    showInfo() {
        return JSON.stringify(this.info);
    }

    get price() {
        return 800 - (this.info.age * 2) + (this.quality * 0.5);
    }
}

