/**
 * Created by rohitk on 04-Dec-15.
 */


export class Util{

    getRandomInteger(min, max){
        return Math.floor(Math.random() * (max - min) + min);
    }
}