class App {
    constructor() {
        this.clearButton = document.getElementById("clear-btn");
        this.loadButton = document.getElementById("load-btn");
        this.carContainerElement = document.getElementById("cars-container");
        this.driverType = document.getElementById("driverType");
        this.date = document.getElementById("date");
        this.pickupTime = document.getElementById("pickupTime");
        this.passengerCount = document.getElementById("passengerCount");
    }

    async init() {
        await this.load();
        this.run();
    }

    run = () => {
        Car.list.forEach((car) => {
            const node = document.createElement("div");
            node.classList.add("col-lg-4", "my-2");
            node.innerHTML = car.render();
            this.carContainerElement.appendChild(node);
        });
    };

    async load() {
        const cars = await Binar.listCars();
        Car.init(cars);
        console.log(cars);
    }

    async loadFilter() {
        const cars = await Binar.listCars((data) => {
            const pickupDateTime = new Date(data.availableAt).getTime();
            const selectedDateTime = new Date(`${this.date.value} ${this.pickupTime.value}`).getTime();
            const timeCheck = pickupDateTime >= selectedDateTime;
            const availableDriver = (this.driverType.value === 'true' && data.available ? true : false);
            const unavailableDriver = (this.driverType.value === 'false' && !data.available ? true : false);
            const capacityCheck = data.capacity >= this.passengerCount.value;

            if (this.driverType.value !== 'default' && this.date.value !== '' && this.pickupTime.value !== 'false' && this.passengerCount.value >= 0) {
                return (availableDriver || unavailableDriver) && timeCheck && capacityCheck;
            } else if (this.driverType.value !== 'default' && this.passengerCount.value > 0) {
                return (availableDriver || unavailableDriver) && capacityCheck;
            } else if (this.date.value !== '' && this.pickupTime.value !== 'false' && this.passengerCount.value > 0) {
                return timeCheck && capacityCheck;
            } else if (this.date.value !== '' && this.pickupTime.value !== 'false') {
                return timeCheck;
            } else if (this.driverType.value !== 'default') {
                return (availableDriver || unavailableDriver);
            } else {
                return capacityCheck;
            }
        });
        console.log(cars);
        Car.init(cars);
    }

    clear = () => {
        let child = this.carContainerElement.firstElementChild;

        while (child) {
            child.remove();
            child = this.carContainerElement.firstElementChild;
        }
    };
}
