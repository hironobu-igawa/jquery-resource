declare module resource {

  /**
   * @interface IModelArray モデル配列
   */
  export interface IModelArray<T extends IModel> extends Array<T> {

    promise: JQueryPromise<IModelArray<T>>;
    resolved: boolean;
  }
}
