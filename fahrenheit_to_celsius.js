function makeClass(){
    class Thermostat{
        constructor(temp){
            //private variable
            this._temp = 5/9 * (temp - 32);
        }

        get temperature(){
            return this._temp;
        }

        set temperature(updateTemp){
            this._temp = updateTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
//using getter
let temp = thermos.temperature;
console.log(temp);
//using setter
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);