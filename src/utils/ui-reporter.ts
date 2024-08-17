import { Dialog } from "@capacitor/dialog";

export class UIReporter {
  static reportInfo({ message }: { message: string }) {
    Dialog.alert({ message });
  }
  static reportSuccess({ message }: { message: string }) {
    Dialog.alert({ message });
  }
  static reportError({ message }: { message: string }) {
    Dialog.alert({ message });
  }
}
