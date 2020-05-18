interface PageInterface {
  color: string
  func?: (paramA: any, paramB: any) => void;
  setParamB?: (key: string,
    val1: string,
    val2: string) => void;
  setParamC?: (key: string,
  val: string,
  uniqueId: string) => void;
}
export { PageInterface }

export default {}