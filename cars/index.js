import { carsTable } from "./cars.js";
import { super_cars } from "./super_cars.js";
import { rally_cars } from "./rally_cars.js";
import { legend_cars } from "./legend_cars.js";

const carsDOM = document.getElementById('cars');
carsDOM.innerHTML = carsTable(super_cars);

const carsDOM1 = document.getElementById('cars1');
carsDOM1.innerHTML = carsTable(rally_cars);

const carsDOM2 = document.getElementById('cars2');
carsDOM2.innerHTML = carsTable(legend_cars);