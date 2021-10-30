export class IdGenerator {
    private static id = 0;

    static getId = (): number => {
      IdGenerator.id += 1;

      return IdGenerator.id;
    }
}
