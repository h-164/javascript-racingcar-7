import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants/constants.js";

export class InputView {
  static carNameList() {
    return Console.readLineAsync(MESSAGE.CAR_NAME_INPUT);
  }
}