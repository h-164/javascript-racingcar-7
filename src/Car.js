import { Random } from "@woowacourse/mission-utils";

class Car {
  #position;
  #name;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  async getRandomNumber() {
    return Random.pickNumberInRange(0, 9);
  }
}

export default Car;